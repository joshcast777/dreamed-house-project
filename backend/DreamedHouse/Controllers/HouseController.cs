using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class HouseController : ControllerBase
	{
		private readonly AppDbContext _context;

		public HouseController(AppDbContext context)
		{
			_context = context;
		}

		// POST: api/House
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		public async Task<ActionResult<House>> PostHouse(House house)
		{
			if (_context.Houses == null)
				return Problem("Entity set 'AppDbContext.Houses' is null.");

			_context.Houses.Add(house);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetHouse", new { id = house.HouseId }, house);
		}

		// GET: api/House
		[HttpGet]
		public async Task<ActionResult<IEnumerable<House>>> GetHouses()
		{
			if (_context.Houses == null)
				return NotFound();

			return await _context.Houses
				.Include(house => house.HouseImages)
				.ToListAsync();
		}

		// GET: api/House/5
		[HttpGet("{houseId}")]
		public async Task<ActionResult<House>> GetHouse(int houseId)
		{
			if (_context.Houses == null)
				return NotFound();

			House? house = await _context.Houses
				.Include(house => house.HouseImages)
				.FirstOrDefaultAsync(house => house.HouseId == houseId);

			if (house == null)
				return NotFound("House not found");

			return house;
		}

		// PUT: api/House/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
		public async Task<IActionResult> PutHouse(int id, House house)
		{
			if (id != house.HouseId)
				return BadRequest();

			_context.Entry(house).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!HouseExists(id))
					return NotFound();
				else
					throw;
			}

			return NoContent();
		}

		// DELETE: api/House/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteHouse(int id)
		{
			if (_context.Houses == null)
				return NotFound();

			House? house = await _context.Houses.FindAsync(id);

			if (house == null)
				return NotFound();

			_context.Houses.Remove(house);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool HouseExists(int houseId)
		{
			return (_context.Houses?.Any(house => house.HouseId == houseId)).GetValueOrDefault();
		}
	}
}
