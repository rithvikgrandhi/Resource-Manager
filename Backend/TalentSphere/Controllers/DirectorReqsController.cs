using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TalentSphere.Models;

namespace TalentSphere.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DirectorReqsController : ControllerBase
    {
        private readonly TalentsphereContext _context;

        public DirectorReqsController(TalentsphereContext context)
        {
            _context = context;
        }

        // GET: api/DirectorReqs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DirectorReq>>> GetDirectorReqs()
        {
          if (_context.DirectorReqs == null)
          {
              return NotFound();
          }
            return await _context.DirectorReqs.ToListAsync();
        }

        // GET: api/DirectorReqs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DirectorReq>> GetDirectorReq(int id)
        {
          if (_context.DirectorReqs == null)
          {
              return NotFound();
          }
            var directorReq = await _context.DirectorReqs.FindAsync(id);

            if (directorReq == null)
            {
                return NotFound();
            }

            return directorReq;
        }

        // PUT: api/DirectorReqs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDirectorReq(int id, DirectorReq directorReq)
        {
            if (id != directorReq.DirId)
            {
                return BadRequest();
            }

            _context.Entry(directorReq).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DirectorReqExists(id))
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

        // POST: api/DirectorReqs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<DirectorReq>> PostDirectorReq(DirectorReq directorReq)
        {
          if (_context.DirectorReqs == null)
          {
              return Problem("Entity set 'TalentsphereContext.DirectorReqs'  is null.");
          }
            _context.DirectorReqs.Add(directorReq);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (DirectorReqExists(directorReq.DirId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetDirectorReq", new { id = directorReq.DirId }, directorReq);
        }

        // DELETE: api/DirectorReqs/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDirectorReq(int id)
        {
            if (_context.DirectorReqs == null)
            {
                return NotFound();
            }
            var directorReq = await _context.DirectorReqs.FindAsync(id);
            if (directorReq == null)
            {
                return NotFound();
            }

            _context.DirectorReqs.Remove(directorReq);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DirectorReqExists(int id)
        {
            return (_context.DirectorReqs?.Any(e => e.DirId == id)).GetValueOrDefault();
        }
    }
}
