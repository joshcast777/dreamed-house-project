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

			var house = await _context.Houses
				.Include(house => house.HouseImages)
				.FirstOrDefaultAsync(house => house.HouseId == houseId);

			if (house == null)
				return NotFound();

			return house;
		}
	}
}
