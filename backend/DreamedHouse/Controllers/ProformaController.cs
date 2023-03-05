using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using DreamedHouse.Data;
using DreamedHouse.Models;
using Newtonsoft.Json;

namespace DreamedHouse.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class ProformaController : ControllerBase
	{
		private readonly AppDbContext _context;

		public ProformaController(AppDbContext context)
		{
			_context = context;
		}

		// POST: api/Proforma
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPost]
		public async Task<ActionResult<Proforma>> PostProforma(Proforma proforma)
		{
			if (_context.Proformas == null)
				return Problem("La Entidad 'Proformas' no existe");

			_context.Proformas.Add(proforma);
			await _context.SaveChangesAsync();

			return Ok(JsonConvert.SerializeObject("Proforma guardada correctamente"));
		}

		// GET: api/Proforma
		[HttpGet]
		public async Task<ActionResult<IEnumerable<Proforma>>> GetProformas()
		{
			if (_context.Proformas == null)
				return NotFound("No se encontraron proformas");

			return await _context.Proformas
				.Include(proforma => proforma.DoorType)
				.Include(proforma => proforma.FloorType)
				.Include(proforma => proforma.FaucetType)
				.Include(proforma => proforma.House)
				.Include(proforma => proforma.User)
				.ToListAsync();
		}

		// GET: api/Proforma/5
		[HttpGet("{proformaId}")]
		public async Task<ActionResult<Proforma>> GetProforma(int proformaId)
		{
			if (_context.Proformas == null)
				return NotFound("No se encontraron proformas");

			var proforma = await _context.Proformas
				.Include(proforma => proforma.DoorType)
				.Include(proforma => proforma.FloorType)
				.Include(proforma => proforma.FaucetType)
				.Include(proforma => proforma.House)
				.Include(proforma => proforma.User)
				.FirstOrDefaultAsync(proforma => proforma.ProformaId == proformaId);

			if (proforma == null)
				return NotFound("Proforma no encontrada");

			return proforma;
		}

		// PUT: api/Proforma/5
		// To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
		[HttpPut("{proformaId}")]
		public async Task<IActionResult> PutProforma(int proformaId, Proforma proforma)
		{
			if (proformaId != proforma.ProformaId)
				return BadRequest("La proforma no coincide con el ID");

			_context.Entry(proforma).State = EntityState.Modified;

			try
			{
				await _context.SaveChangesAsync();
			}
			catch (DbUpdateConcurrencyException)
			{
				if (!ProformaExists(proformaId))
					return NotFound("Proforma no encontrada");
				else
					throw;
			}

			return Ok(JsonConvert.SerializeObject("Proforma actualizada correctamente"));
		}

		// DELETE: api/Proforma/5
		[HttpDelete("{proformaId}")]
		public async Task<IActionResult> DeleteProforma(int proformaId)
		{
			if (_context.Proformas == null)
				return NotFound("No se encontraron proformas");

			var proforma = await _context.Proformas.FindAsync(proformaId);

			if (proforma == null)
				return NotFound("Proforma no encontrada");

			_context.Proformas.Remove(proforma);
			await _context.SaveChangesAsync();

			return Ok(JsonConvert.SerializeObject("Proforma eliminada correctamente"));
		}

		private bool ProformaExists(int proformaId)
		{
			return (_context.Proformas?.Any(proforma => proforma.ProformaId == proformaId)).GetValueOrDefault();
		}
	}
}
