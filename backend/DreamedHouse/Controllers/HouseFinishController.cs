using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class HouseFinishController : ControllerBase
	{
		private readonly AppDbContext _context;

		public HouseFinishController(AppDbContext context)
		{
			_context = context;
		}

		// POST: api/HouseFinish
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		public async Task<ActionResult<HouseFinish>> PostHouseFinish(HouseFinish houseFinish)
		{
			if (_context.HouseFinishes == null)
				return Problem("Entity set 'AppDbContext.HouseFinishes' is null.");

			_context.HouseFinishes.Add(houseFinish);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetHouseFinish", new { id = houseFinish.HouseFinisheId }, houseFinish);
		}

		// GET: api/HouseFinish
		[HttpGet]
		public async Task<ActionResult<IEnumerable<HouseFinish>>> GetHouseFinishes()
		{
			if (_context.HouseFinishes == null)
				return NotFound();

			return await _context.HouseFinishes.ToListAsync();
		}

		// GET: api/HouseFinish/5
		[HttpGet("{id}")]
		public async Task<ActionResult<HouseFinish>> GetHouseFinish(int id)
		{
			if (_context.HouseFinishes == null)
				return NotFound();

			HouseFinish? houseFinish = await _context.HouseFinishes.FindAsync(id);

			if (houseFinish == null)
				return NotFound();

			return houseFinish;
		}

		// PUT: api/HouseFinish/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
		public async Task<IActionResult> PutHouseFinish(int id, HouseFinish houseFinish)
		{
			if (id != houseFinish.HouseFinisheId)
				return BadRequest();

			_context.Entry(houseFinish).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!HouseFinishExists(id))
					return NotFound();
				else
					throw;
			}

			return NoContent();
		}

		// DELETE: api/HouseFinish/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteHouseFinish(int id)
		{
			if (_context.HouseFinishes == null)
				return NotFound();

			HouseFinish? houseFinish = await _context.HouseFinishes.FindAsync(id);

			if (houseFinish == null)
				return NotFound();

			_context.HouseFinishes.Remove(houseFinish);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool HouseFinishExists(int houseFinishId)
		{
			return (_context.HouseFinishes?.Any(houseFinish => houseFinish.HouseFinisheId == houseFinishId)).GetValueOrDefault();
		}
	}
}
