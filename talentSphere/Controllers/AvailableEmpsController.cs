using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using talentSphere.Models;

namespace talentSphere.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AvailableEmpsController : ControllerBase
    {
        private readonly TalentsphereContext _context = new();

     

        // GET: api/AvailableEmps
        [HttpGet]
        public async Task<ActionResult<IEnumerable<AvailableEmp>>> GetAvailableEmps()
        {
          if (_context.AvailableEmps == null)
          {
              return NotFound();
          }
            return await _context.AvailableEmps.ToListAsync();
        }

        // GET: api/AvailableEmps/5
        [HttpGet("{id}")]
        public async Task<ActionResult<AvailableEmp>> GetAvailableEmp(int id)
        {
          if (_context.AvailableEmps == null)
          {
              return NotFound();
          }
            var availableEmp = await _context.AvailableEmps.FindAsync(id);

            if (availableEmp == null)
            {
                return NotFound();
            }

            return availableEmp;
        }

    [HttpGet("GetBySkill/{skill}")]
    public async Task<ActionResult<IEnumerable<AvailableEmp>>> GetAvailableBySkill(string skill)
    {
      if (_context.AvailableEmps == null)
      {
        return NotFound();
      }

      // Use LINQ to filter employees by the exact skill
      var availableEmps = await _context.AvailableEmps
          .Where(emp => emp.Skill == skill) // Case-insensitive comparison
          .ToListAsync();

      if (!availableEmps.Any())
      {
        return NotFound();
      }

      return Ok(availableEmps);
    }

    // PUT: api/AvailableEmps/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
        public async Task<IActionResult> PutAvailableEmp(int id, AvailableEmp availableEmp)
        {
            if (id != availableEmp.EmpId)
            {
                return BadRequest();
            }

            _context.Entry(availableEmp).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AvailableEmpExists(id))
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

        // POST: api/AvailableEmps
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<AvailableEmp>> PostAvailableEmp(AvailableEmp availableEmp)
        {
          if (_context.AvailableEmps == null)
          {
              return Problem("Entity set 'TalentsphereContext.AvailableEmps'  is null.");
          }
            _context.AvailableEmps.Add(availableEmp);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (AvailableEmpExists(availableEmp.EmpId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetAvailableEmp", new { id = availableEmp.EmpId }, availableEmp);
        }

        // DELETE: api/AvailableEmps/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAvailableEmp(int id)
        {
            if (_context.AvailableEmps == null)
            {
                return NotFound();
            }
            var availableEmp = await _context.AvailableEmps.FindAsync(id);
            if (availableEmp == null)
            {
                return NotFound();
            }

            _context.AvailableEmps.Remove(availableEmp);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AvailableEmpExists(int id)
        {
            return (_context.AvailableEmps?.Any(e => e.EmpId == id)).GetValueOrDefault();
        }
    }
}
