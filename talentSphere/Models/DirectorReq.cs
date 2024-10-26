using System;
using System.Collections.Generic;

namespace talentSphere.Models;

public partial class DirectorReq
{
    public int ReqId { get; set; }

    public int DirId { get; set; }

    public string Requirements { get; set; } = null!;

    public virtual User Dir { get; set; } = null!;
}
