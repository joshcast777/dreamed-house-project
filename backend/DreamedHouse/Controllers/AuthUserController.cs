using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using DreamedHouse.Data;
using DreamedHouse.Models;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class AuthUserController : ControllerBase
	{
		private readonly AppDbContext _context;
		private readonly IConfiguration _configuration;

		public AuthUserController(AppDbContext context, IConfiguration configuration)
		{
			_context = context;
			_configuration = configuration;
		}

		// POST: api/AuthUser/SignIn
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost("SignIn")]
		public async Task<ActionResult<AuthUser>> PostAuthUser(AuthUser authUser)
		{
			var user = await _context.Users.FirstOrDefaultAsync(user => user.Email == authUser.Email && user.Password == authUser.Password);

			if (user == null)
				return BadRequest("Combinación no encontrada");
			else
				return Ok(new { token = GenerateToken(user), userAuthenticated = user });
		}

		// POST: api/AuthUser/SingUp
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost("SignUp")]
		public async Task<ActionResult<User>> PostUser(User user)
		{
			if (_context.Users == null)
				return Problem("La entidad 'Usuarios' no existe");

			if (UserDniExists(user.Dni) || UserPhoneNumberExists(user.PhoneNumber) || UserEmailExists(user.Email))
				return BadRequest("Cédula, número de celular o correo electrónico ya registrados");

			user.CreatedAt = DateTime.Now;
			user.UpdatedAt = DateTime.Now;

			_context.Users.Add(user);
			await _context.SaveChangesAsync();

			return Ok(JsonConvert.SerializeObject("Usuario ingresado correctamente"));
		}

		private string GenerateToken(User user)
		{
			var claims = new List<Claim>
			{
				new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
				new Claim(ClaimTypes.Email, user.Email)
			};

			var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value!));

			var tokenDescriptor = new SecurityTokenDescriptor
			{
				Subject = new ClaimsIdentity(claims),
				Expires = System.DateTime.Now.AddDays(1),
				SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature)
			};

			var tokenHandler = new JwtSecurityTokenHandler();

			return tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
		}

		private bool UserDniExists(string userDni)
		{
			return (_context.Users?.Any(user => user.Dni == userDni)).GetValueOrDefault();
		}

		private bool UserPhoneNumberExists(string userPhoneNumber)
		{
			return (_context.Users?.Any(user => user.PhoneNumber == userPhoneNumber)).GetValueOrDefault();
		}

		private bool UserEmailExists(string userEmail)
		{
			return (_context.Users?.Any(user => user.Email == userEmail)).GetValueOrDefault();
		}
	}
}