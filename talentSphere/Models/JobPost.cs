using System;
using System.Collections.Generic;

namespace talentSphere.Models;

public partial class JobPost
{
    public int JobPostId { get; set; }

    public string Title { get; set; } = null!;

    public string Description { get; set; } = null!;

    public string SkillsRequired { get; set; } = null!;

    public int NumberOfPeopleRequired { get; set; }

    public DateTime? PostedDate { get; set; }

    public string? Status { get; set; }

    public virtual ICollection<Application> Applications { get; set; } = new List<Application>();
}
