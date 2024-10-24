using System;
using System.Collections.Generic;

namespace TalentSphere.Models;

public partial class DirectorReq
{
    public int DirId { get; set; }

    public string Requirements { get; set; } = null!;

    public virtual User Dir { get; set; } = null!;
}
