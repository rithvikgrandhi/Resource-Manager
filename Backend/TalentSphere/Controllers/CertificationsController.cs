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
  public class CertificationsController : ControllerBase
  {
    private readonly TalentsphereContext _context;

    public CertificationsController(TalentsphereContext context)
    {
      _context = context;
    }

    // GET: api/Certifications
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Certification>>> GetCertifications()
    {
      if (_context.Certifications == null)
      {
        return NotFound();
      }
      return await _context.Certifications.ToListAsync();
    }

    // GET: api/Certifications/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Certification>> GetCertification(int id)
    {
      if (_context.Certifications == null)
      {
        return NotFound();
      }
      var certification = await _context.Certifications.FindAsync(id);

      if (certification == null)
      {
        return NotFound();
      }

      return certification;
    }

    // PUT: api/Certifications/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutCertification(int id, Certification certification)
    {
      if (id != certification.CertificationId)
      {
        return BadRequest();
      }

      _context.Entry(certification).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!CertificationExists(id))
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

    // POST: api/Certifications
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Certification>> PostCertification(Certification certification)
    {
      if (_context.Certifications == null)
      {
        return Problem("Entity set 'TalentsphereContext.Certifications'  is null.");
      }
      _context.Certifications.Add(certification);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetCertification", new { id = certification.CertificationId }, certification);
    }

    // DELETE: api/Certifications/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteCertification(int id)
    {
      if (_context.Certifications == null)
      {
        return NotFound();
      }
      var certification = await _context.Certifications.FindAsync(id);
      if (certification == null)
      {
        return NotFound();
      }

      _context.Certifications.Remove(certification);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool CertificationExists(int id)
    {
      return (_context.Certifications?.Any(e => e.CertificationId == id)).GetValueOrDefault();
    }

    // GET: api/Certifications/Employee/5
    [HttpGet("Employee/{userId}")]
    public async Task<ActionResult<IEnumerable<Certification>>> GetCertificationsByEmployeeId(int userId)
    {
      if (_context.Certifications == null)
      {
        return NotFound("Certifications context is null.");
      }

      var certifications = await _context.Certifications
                                          .Where(c => c.UserId == userId)
                                          .ToListAsync();

      if (certifications == null || certifications.Count == 0)
      {
        return NotFound($"No certifications found for user with ID {userId}.");
      }

      return certifications;
    }

    // GET: api/Users/Certifications
    [HttpGet("UserCertifications")]
    public async Task<ActionResult<IEnumerable<dynamic>>> GetUserCertifications()
    {
      var result = await (from u in _context.Users
                          join c in _context.Certifications
                          on u.UserId equals c.UserId
                          select new
                          {
                            FullName = u.FullName,
                            Email = u.Email,
                            PhoneNumber = u.PhoneNumber,
                            CertificationId = c.CertificationId,
                            CertificationDate = c.CertificationDate,
                            CertificationName = c.CertificationName,
                            Justification = c.Justification,
                            Status = c.Status
                          }).ToListAsync();

      if (result == null || !result.Any())
      {
        return NotFound("No certifications found for users.");
      }

      return Ok(result);
    }


    // PATCH: api/Certifications/5/status
    [HttpPatch("{id}/status")]
    public async Task<IActionResult> UpdateCertificationStatus(int id, [FromBody] CertificationStatus certificationStatus)
    {
      if (_context.Certifications == null)
      {
        return NotFound();
      }

      var certification = await _context.Certifications.FindAsync(id);

      if (certification == null)
      {
        return NotFound();
      }

      // Update the status
      certification.Status = certificationStatus.Status;

      _context.Entry(certification).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!CertificationExists(id))
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

  }
  public class CertificationStatus
  {
  
    public bool Status { get; set; }
   
  }
}
