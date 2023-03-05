using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;
using Newtonsoft.Json;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private readonly AppDbContext _context;

		public UserController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/User/5
		[HttpGet("{userId}")]
		public async Task<ActionResult<User>> GetUser(int userId)
		{
			if (_context.Users == null)
				return NotFound("No se encontraron usuarios registrados");

			var user = await _context.Users.FindAsync(userId);

			if (user == null)
				return NotFound("Usuario no registrado");

			return user;
		}

		// PUT: api/User/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{userId}")]
		public async Task<IActionResult> PutUser(int userId, User user)
		{
			if (userId != user.UserId)
				return BadRequest("El usuario no coincide con el ID");

			if (UserPhoneNumberExists(user.UserId, user.PhoneNumber) || UserEmailExists(user.UserId, user.Email))
				return BadRequest("Cédula, número de celular o correo electrónico ya registrados");

			user.UpdatedAt = DateTime.Now;

			_context.Entry(user).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!UserExists(userId))
					return NotFound("Usuario no encontrado");
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
				return BadRequest("El usuario no coincide con el ID");

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
					return NotFound("Usuario no encontrado");
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
				return NotFound("No se encontraron usuarios registrados");

			var user = await _context.Users.FindAsync(userId);

			if (user == null)
				return NotFound("Usuario no encontrado");

			_context.Users.Remove(user);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool UserExists(int userId)
		{
			return (_context.Users?.Any(e => e.UserId == userId)).GetValueOrDefault();
		}

		private bool UserPhoneNumberExists(int userId, string userPhoneNumber)
		{
			return (_context.Users?.Any(user => user.PhoneNumber == userPhoneNumber && user.UserId != userId)).GetValueOrDefault();
		}

		private bool UserEmailExists(int userId, string userEmail)
		{
			return (_context.Users?.Any(user => user.Email == userEmail && user.UserId != userId)).GetValueOrDefault();
		}

		private bool ValidateUserPassword(int userId, string password)
		{
			return (_context.Users?.Any(user => user.Password == password && user.UserId == userId)).GetValueOrDefault();
		}
	}
}
