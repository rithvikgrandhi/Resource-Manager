using System;
using System.Collections.Generic;

namespace TalentSphere.Models;

public partial class DirectorRequirement
{
    public int ReqId { get; set; }

    public int? DirId { get; set; }

    public int? ProjectId { get; set; }

    public string Requirements { get; set; } = null!;

    public virtual User? Dir { get; set; }
}
