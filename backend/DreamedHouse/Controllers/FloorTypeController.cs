using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class FloorTypeController : ControllerBase
	{
		private readonly AppDbContext _context;

		public FloorTypeController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/FloorType
		[HttpGet]
		public async Task<ActionResult<IEnumerable<FloorType>>> GetFloorTypes()
		{
			if (_context.FloorTypes == null)
				return NotFound("La entidad 'Tipos de Piso' no existe");

			return await _context.FloorTypes.ToListAsync();
		}

		// GET: api/FloorType/5
		[HttpGet("{id}")]
		public async Task<ActionResult<FloorType>> GetFloorType(int id)
		{
			if (_context.FloorTypes == null)
				return NotFound("La entidad 'Tipos de Piso' no existe");

			var floorType = await _context.FloorTypes.FindAsync(id);

			if (floorType == null)
				return NotFound("Tipo de Piso no encontrado");

			return floorType;
		}

	}
}
