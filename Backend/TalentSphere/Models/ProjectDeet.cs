using System;
using System.Collections.Generic;

namespace TalentSphere.Models;

public partial class ProjectDeet
{
    public int ProjectId { get; set; }

    public int? DirectorId { get; set; }

    public string? Members { get; set; }

    public virtual User? Director { get; set; }
}
