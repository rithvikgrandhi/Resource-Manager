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
    public class ProjectDeetsController : ControllerBase
    {
        private readonly TalentsphereContext _context = new();

        //public ProjectDeetsController(TalentsphereContext context)
        //{
        //    _context = context;
        //}

        // GET: api/ProjectDeets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ProjectDeet>>> GetProjectDeets()
        {
          if (_context.ProjectDeets == null)
          {
              return NotFound();
          }
            return await _context.ProjectDeets.ToListAsync();
        }

        // GET: api/ProjectDeets/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ProjectDeet>> GetProjectDeet(int id)
        {
          if (_context.ProjectDeets == null)
          {
              return NotFound();
          }
            var projectDeet = await _context.ProjectDeets.FindAsync(id);

            if (projectDeet == null)
            {
                return NotFound();
            }

            return projectDeet;
        }

        // PUT: api/ProjectDeets/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProjectDeet(int id, ProjectDeet projectDeet)
        {
            if (id != projectDeet.ProjectId)
            {
                return BadRequest();
            }

            _context.Entry(projectDeet).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProjectDeetExists(id))
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

        // POST: api/ProjectDeets
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ProjectDeet>> PostProjectDeet(ProjectDeet projectDeet)
        {
          if (_context.ProjectDeets == null)
          {
              return Problem("Entity set 'TalentsphereContext.ProjectDeets'  is null.");
          }
            _context.ProjectDeets.Add(projectDeet);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (ProjectDeetExists(projectDeet.ProjectId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetProjectDeet", new { id = projectDeet.ProjectId }, projectDeet);
        }

        // DELETE: api/ProjectDeets/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProjectDeet(int id)
        {
            if (_context.ProjectDeets == null)
            {
                return NotFound();
            }
            var projectDeet = await _context.ProjectDeets.FindAsync(id);
            if (projectDeet == null)
            {
                return NotFound();
            }

            _context.ProjectDeets.Remove(projectDeet);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProjectDeetExists(int id)
        {
            return (_context.ProjectDeets?.Any(e => e.ProjectId == id)).GetValueOrDefault();
        }
    }
}
