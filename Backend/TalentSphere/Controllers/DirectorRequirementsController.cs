using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

using TalentSphere.Models;

namespace talentSphere.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [EnableCors("AllowAnyorigin")]
  public class DirectorRequirementsController : ControllerBase
  {
    private readonly TalentsphereContext _context;

    public DirectorRequirementsController(TalentsphereContext context)
    {
      _context = context;
    }

    // GET: api/DirectorRequirements
    [HttpGet]
    public async Task<ActionResult<IEnumerable<DirectorRequirement>>> GetDirectorRequirements()
    {
      if (_context.DirectorRequirements == null)
      {
        return NotFound();
      }
      return await _context.DirectorRequirements.ToListAsync();
    }

    // GET: api/DirectorRequirements/5
    [HttpGet("{id}")]
    public async Task<ActionResult<DirectorRequirement>> GetDirectorRequirement(int id)
    {
      if (_context.DirectorRequirements == null)
      {
        return NotFound();
      }
      var directorRequirement = await _context.DirectorRequirements.FindAsync(id);

      if (directorRequirement == null)
      {
        return NotFound();
      }

      return directorRequirement;
    }

    // PUT: api/DirectorRequirements/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutDirectorRequirement(int id, DirectorRequirement directorRequirement)
    {
      if (id != directorRequirement.ReqId)
      {
        return BadRequest();
      }

      _context.Entry(directorRequirement).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!DirectorRequirementExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/DirectorRequirements
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<DirectorRequirement>> PostDirectorRequirement(DirectorRequirement directorRequirement)
    {
      if (_context.DirectorRequirements == null)
      {
        return Problem("Entity set 'TalentsphereContext.DirectorRequirements'  is null.");
      }
      _context.DirectorRequirements.Add(directorRequirement);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetDirectorRequirement", new { id = directorRequirement.ReqId }, directorRequirement);
    }

    // DELETE: api/DirectorRequirements/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteDirectorRequirement(int id)
    {
      if (_context.DirectorRequirements == null)
      {
        return NotFound();
      }
      var directorRequirement = await _context.DirectorRequirements.FindAsync(id);
      if (directorRequirement == null)
      {
        return NotFound();
      }

      _context.DirectorRequirements.Remove(directorRequirement);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool DirectorRequirementExists(int id)
    {
      return (_context.DirectorRequirements?.Any(e => e.ReqId == id)).GetValueOrDefault();
    }
  }
}
