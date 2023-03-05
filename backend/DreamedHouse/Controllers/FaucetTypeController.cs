using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class FaucetTypeController : ControllerBase
	{
		private readonly AppDbContext _context;

		public FaucetTypeController(AppDbContext context)
		{
			_context = context;
		}

		// GET: api/FaucetType
		[HttpGet]
		public async Task<ActionResult<IEnumerable<FaucetType>>> GetFaucetTypes()
		{
			if (_context.FaucetTypes == null)
				return NotFound("La entidad 'Tipos de Grifería' no existe");

			return await _context.FaucetTypes.ToListAsync();
		}

		// GET: api/FaucetType/5
		[HttpGet("{id}")]
		public async Task<ActionResult<FaucetType>> GetFaucetType(int id)
		{
			if (_context.FaucetTypes == null)
				return NotFound("La entidad 'Tipos de Grifería' no existe");

			var faucetType = await _context.FaucetTypes.FindAsync(id);

			if (faucetType == null)
				return NotFound("Tipo de Grifería no encontrado");

			return faucetType;
		}
	}
}
