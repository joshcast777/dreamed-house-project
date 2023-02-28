using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	[Authorize]
	public class UserController : ControllerBase
	{
		private readonly AppDbContext _context;

		public UserController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/User
		// [HttpGet]
		// public async Task<ActionResult<IEnumerable<User>>> GetUsers()
		// {
		// 	if (_context.Users == null)
		// 		return NotFound();

		// 	return await _context.Users.ToListAsync();
		// }

		// GET: api/User/5
		[HttpGet("{userId}")]
		public async Task<ActionResult<User>> GetUser(int userId)
		{
			if (_context.Users == null)
				return NotFound();

			var user = await _context.Users.FindAsync(userId);

			if (user == null)
				return NotFound();

			return user;
		}

		// PUT: api/User/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{userId}")]
		public async Task<IActionResult> PutUser(int userId, User user)
		{
			if (userId != user.UserId)
				return BadRequest();

			if (user.Email.Substring(user.Email.IndexOf("@") + 1) == "dreamedhouse.com")
				return BadRequest("Correo inválido.");

			if (UserPhoneNumberDuplicated(user.UserId, user.PhoneNumber))
				return BadRequest("Número de celular ya existente.");

			if (UserEmailDuplicated(user.UserId, user.Email))
				return BadRequest("Correo ya existente.");

			_context.Entry(user).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!UserExists(userId))
					return NotFound();
				else
					throw;
			}

			return Ok(JsonConvert.SerializeObject("Usuario actualizado correctamente"));
		}

		// PUT: api/User/Password/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("Password/{userId}")]
		public async Task<IActionResult> PutUserPassword(int userId, ChangePassword data)
		{
			if (userId != data.User.UserId)
				return BadRequest();

			if (!ValidateUserPassword(userId, data.User.Password))
				return BadRequest("Contraseña actual no coincide");

			data.User.Password = data.NewPassword;
			data.User.UpdatedAt = DateTime.Now;

			_context.Entry(data.User).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!UserExists(userId))
					return NotFound();
				else
					throw;
			}

			return Ok(JsonConvert.SerializeObject("Contraseña actualizada correctamente"));
		}

		// DELETE: api/User/5
		[HttpDelete("{userId}")]
		public async Task<IActionResult> DeleteUser(int userId)
		{
			if (_context.Users == null)
				return NotFound();

			var user = await _context.Users.FindAsync(userId);

			if (user == null)
				return NotFound();

			_context.Users.Remove(user);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool UserExists(int userId)
		{
			return (_context.Users?.Any(user => user.UserId == userId)).GetValueOrDefault();
		}

		private bool UserPhoneNumberDuplicated(int userId, string userPhoneNumber)
		{
			return (_context.Users?.Any(user => user.PhoneNumber == userPhoneNumber && user.UserId != userId)).GetValueOrDefault();
		}

		private bool UserEmailDuplicated(int userId, string userEmail)
		{
			return (_context.Users?.Any(user => user.Email == userEmail && user.UserId != userId)).GetValueOrDefault();
		}

		private bool ValidateUserPassword(int userId, string password)
		{
			return (_context.Users?.Any(user => user.Password == password && user.UserId == userId)).GetValueOrDefault();
		}
	}
}
