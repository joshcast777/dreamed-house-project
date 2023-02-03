using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.data;
using DreamedHouse.models;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class HouseImageController : ControllerBase
	{
		private readonly AppDbContext _context;

		public HouseImageController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/HouseImage
		[HttpGet]
		public async Task<ActionResult<IEnumerable<HouseImage>>> GetHouseImages()
		{
			if (_context.HouseImages == null)
				return NotFound();

			return await _context.HouseImages.ToListAsync();
		}

		// GET: api/HouseImage/5
		[HttpGet("{id}")]
		public async Task<ActionResult<HouseImage>> GetHouseImage(int id)
		{
			if (_context.HouseImages == null)
				return NotFound();

			var houseImage = await _context.HouseImages.FindAsync(id);

			if (houseImage == null)
				return NotFound();

			return houseImage;
		}

		// PUT: api/HouseImage/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{id}")]
		public async Task<IActionResult> PutHouseImage(int id, HouseImage houseImage)
		{
			if (id != houseImage.ImageId)
				return BadRequest();

			_context.Entry(houseImage).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!HouseImageExists(id))
					return NotFound();
				else
					throw;
			}

			return NoContent();
		}

		// POST: api/HouseImage
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		public async Task<ActionResult<HouseImage>> PostHouseImage(HouseImage houseImage)
		{
			if (_context.HouseImages == null)
				return Problem("Entity set 'AppDbContext.HouseImages'  is null.");

			_context.HouseImages.Add(houseImage);
			await _context.SaveChangesAsync();

			return CreatedAtAction("GetHouseImage", new { id = houseImage.ImageId }, houseImage);
		}

		// DELETE: api/HouseImage/5
		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteHouseImage(int id)
		{
			if (_context.HouseImages == null)
				return NotFound();

			var houseImage = await _context.HouseImages.FindAsync(id);

			if (houseImage == null)
				return NotFound();

			_context.HouseImages.Remove(houseImage);
			await _context.SaveChangesAsync();

			return NoContent();
		}

		private bool HouseImageExists(int id)
		{
			return (_context.HouseImages?.Any(e => e.ImageId == id)).GetValueOrDefault();
		}
	}
}
