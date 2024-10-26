using System;
using System.Collections.Generic;

namespace talentSphere.Models;

public partial class Application
{
    public int ApplicationId { get; set; }

    public int? UserId { get; set; }

    public int? JobPostId { get; set; }

    public string Status { get; set; } = null!;

    public DateTime? ApplicationDate { get; set; }

    public string? Skills { get; set; }

    public DateTime? LastUpdated { get; set; }

    public string? CoverLetter { get; set; }

    public virtual JobPost? JobPost { get; set; }

    public virtual User? User { get; set; }
}
