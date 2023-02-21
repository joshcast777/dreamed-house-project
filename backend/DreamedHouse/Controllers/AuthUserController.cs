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
			User? user = await _context.Users.FirstOrDefaultAsync(user => user.Email == authUser.Email && user.Password == authUser.Password);

			if (user == null)
				return BadRequest("Correo o contraseña inexistentes");
			else
				return Ok(new
				{
					token = GenerateToken(user),
					userAuthenticated = new
					{
						userId = user.UserId,
						dni = user.Dni,
						firstName = user.FirstName,
						lastName = user.LastName,
						phoneNumber = user.PhoneNumber,
						email = user.Email,
						createdAt = user.CreatedAt,
						updatedAt = user.UpdatedAt,
						roleId = user.RoleId
					}
				});
		}

		// POST: api/AuthUser/SingUp
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost("SignUp")]
		public async Task<ActionResult<User>> PostUser(User user)
		{
			if (_context.Users == null)
				return Problem("Entity set 'AppDbContext.Users' is null.");

			if (user.Email.Substring(user.Email.IndexOf("@") + 1) == "dreamedhouse.com")
				return BadRequest("Correo inválido.");

			if (UserDniDuplicated(user.Dni))
				return BadRequest("Cédula ya existente.");

			if (UserPhoneNumberDuplicated(user.PhoneNumber))
				return BadRequest("Número de celular ya existente.");

			if (UserEmailDuplicated(user.Email))
				return BadRequest("Correo ya existente.");

			user.RoleId = 2;
			user.CreatedAt = DateTime.Now;
			user.UpdatedAt = DateTime.Now;

			_context.Users.Add(user);
			await _context.SaveChangesAsync();

			return Ok(JsonConvert.SerializeObject("Usuario ingresado correctamente"));
		}

		private string GenerateToken(User user)
		{
			List<Claim>? claims = new List<Claim>
			{
				new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
				new Claim(ClaimTypes.Email, user.Email)
			};

			SymmetricSecurityKey? key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(_configuration.GetSection("AppSettings:Token").Value!));

			SecurityTokenDescriptor? tokenDescriptor = new SecurityTokenDescriptor
			{
				Subject = new ClaimsIdentity(claims),
				Expires = System.DateTime.Now.AddDays(1),
				SigningCredentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha512Signature)
			};

			JwtSecurityTokenHandler? tokenHandler = new JwtSecurityTokenHandler();

			return tokenHandler.WriteToken(tokenHandler.CreateToken(tokenDescriptor));
		}

		private bool UserDniDuplicated(string userDni)
		{
			return (_context.Users?.Any(user => user.Dni == userDni)).GetValueOrDefault();
		}

		private bool UserPhoneNumberDuplicated(string userPhoneNumber)
		{
			return (_context.Users?.Any(user => user.PhoneNumber == userPhoneNumber)).GetValueOrDefault();
		}

		private bool UserEmailDuplicated(string userEmail)
		{
			return (_context.Users?.Any(user => user.Email == userEmail)).GetValueOrDefault();
		}
	}
}