using System;
using System.Collections.Generic;

namespace TalentSphere.Models;

public partial class Application
{
    public int ApplicationId { get; set; }

    public int UserId { get; set; }

    public int JobPostId { get; set; }

    public string? Status { get; set; }

    public DateTime? ApplicationDate { get; set; }

    public virtual JobPost JobPost { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
