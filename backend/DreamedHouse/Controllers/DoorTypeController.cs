using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class DoorTypeController : ControllerBase
	{
		private readonly AppDbContext _context;

		public DoorTypeController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/DoorType
		[HttpGet]
		public async Task<ActionResult<IEnumerable<DoorType>>> GetDoorTypes()
		{
			if (_context.DoorTypes == null)
				return NotFound("La entidad 'Tipos de Puerta' no existe");

			return await _context.DoorTypes.ToListAsync();
		}

		// GET: api/DoorType/5
		[HttpGet("{id}")]
		public async Task<ActionResult<DoorType>> GetDoorType(int id)
		{
			if (_context.DoorTypes == null)
				return NotFound("La entidad 'Tipos de Puerta' no existe");

			var doorType = await _context.DoorTypes.FindAsync(id);

			if (doorType == null)
				return NotFound("Tipo de Puerta no encontrado");

			return doorType;
		}
	}
}
