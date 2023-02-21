using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;
using Microsoft.AspNetCore.Authorization;

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
		[HttpGet]
		public async Task<ActionResult<IEnumerable<User>>> GetUsers()
		{
			if (_context.Users == null)
				return NotFound();

			return await _context.Users.ToListAsync();
		}

		// GET: api/User/5
		[HttpGet("{id}")]
		public async Task<ActionResult<User>> GetUser(int id)
		{
			if (_context.Users == null)
				return NotFound();

			User? user = await _context.Users.FindAsync(id);

			if (user == null)
				return NotFound();

			return user;
		}

		// PUT: api/User/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
		public async Task<IActionResult> PutUser(int id, User user)
		{
			if (id != user.UserId)
				return BadRequest();

			_context.Entry(user).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!UserExists(id))
					return NotFound();
				else
					throw;
			}

			return NoContent();
		}

		// DELETE: api/User/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteUser(int id)
		{
			if (_context.Users == null)
				return NotFound();

			User? user = await _context.Users.FindAsync(id);

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
	}
}