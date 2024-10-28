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
  public class ApplicationsController : ControllerBase
  {
    private readonly TalentsphereContext _context;

    public ApplicationsController(TalentsphereContext context)
    {
      _context = context;
    }

    // GET: api/Applications
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Application>>> GetApplications()
    {
      if (_context.Applications == null)
      {
        return NotFound();
      }
      return await _context.Applications.ToListAsync();
    }

    // GET: api/Applications/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Application>> GetApplication(int id)
    {
      if (_context.Applications == null)
      {
        return NotFound();
      }
      var application = await _context.Applications.FindAsync(id);

      if (application == null)
      {
        return NotFound();
      }

      return application;
    }

    // PUT: api/Applications/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutApplication(int id, Application application)
    {
      if (id != application.ApplicationId)
      {
        return BadRequest();
      }

      _context.Entry(application).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ApplicationExists(id))
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

    // POST: api/Applications
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Application>> PostApplication(Application application)
    {
      if (_context.Applications == null)
      {
        return Problem("Entity set 'TalentsphereContext.Applications'  is null.");
      }
      _context.Applications.Add(application);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetApplication", new { id = application.ApplicationId }, application);
    }

    // DELETE: api/Applications/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteApplication(int id)
    {
      if (_context.Applications == null)
      {
        return NotFound();
      }
      var application = await _context.Applications.FindAsync(id);
      if (application == null)
      {
        return NotFound();
      }

      _context.Applications.Remove(application);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    [HttpGet("user/{userId}")]
    public async Task<List<object>> GetJobApplicationsAsync()
    {
      var query = from a in _context.Applications
                  join j in _context.JobPosts
                  on a.JobPostId equals j.JobPostId
                  select new
                  {
                    JobTitle = j.Title,
                    Status = a.Status,
                    ApplicationDate = a.ApplicationDate,
                    LastUpdated = a.LastUpdated,
                    Skills = a.Skills,
                    CoverLetter = a.CoverLetter
                  };

      return await query.ToListAsync<object>();
    }

    [HttpGet("post/{jobPostId}")]
    public async Task<List<object>> GetApplicationsByJobId(int jobPostId)
    {
      // LINQ query using method syntax
      var query = (from a in _context.Applications
                   join j in _context.JobPosts on a.JobPostId equals j.JobPostId
                   join u in _context.Users on a.UserId equals u.UserId
                   where j.JobPostId == jobPostId
                   select new
                   {
                     ApplicationId = a.ApplicationId,
                     UserId = a.UserId,
                     JobPostId = j.JobPostId,
                     Status = a.Status,
                     ApplicationDate = a.ApplicationDate,
                     LastUpdated = a.LastUpdated,
                     Skills = a.Skills,
                     CoverLetter = a.CoverLetter,
                     FullName = u.FullName,
                     Email = u.Email
                   });

      return await query.ToListAsync<object>();
    }


    private bool ApplicationExists(int id)
    {
      return (_context.Applications?.Any(e => e.ApplicationId == id)).GetValueOrDefault();
    }
  }
}
