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
    public class JobPostsController : ControllerBase
    {
        private readonly TalentsphereContext _context;

        public JobPostsController(TalentsphereContext context)
        {
            _context = context;
        }

        // GET: api/JobPosts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<JobPost>>> GetJobPosts()
        {
          if (_context.JobPosts == null)
          {
              return NotFound();
          }
            return await _context.JobPosts.ToListAsync();
        }

        // GET: api/JobPosts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<JobPost>> GetJobPost(int id)
        {
          if (_context.JobPosts == null)
          {
              return NotFound();
          }
            var jobPost = await _context.JobPosts.FindAsync(id);

            if (jobPost == null)
            {
                return NotFound();
            }

            return jobPost;
        }

        // PUT: api/JobPosts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutJobPost(int id, JobPost jobPost)
        {
            if (id != jobPost.JobPostId)
            {
                return BadRequest();
            }

            _context.Entry(jobPost).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!JobPostExists(id))
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

        // POST: api/JobPosts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<JobPost>> PostJobPost(JobPost jobPost)
        {
          if (_context.JobPosts == null)
          {
              return Problem("Entity set 'TalentsphereContext.JobPosts'  is null.");
          }
            _context.JobPosts.Add(jobPost);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetJobPost", new { id = jobPost.JobPostId }, jobPost);
        }

        // DELETE: api/JobPosts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteJobPost(int id)
        {
            if (_context.JobPosts == null)
            {
                return NotFound();
            }
            var jobPost = await _context.JobPosts.FindAsync(id);
            if (jobPost == null)
            {
                return NotFound();
            }

            _context.JobPosts.Remove(jobPost);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool JobPostExists(int id)
        {
            return (_context.JobPosts?.Any(e => e.JobPostId == id)).GetValueOrDefault();
        }
    }
}
