using System;
using System.Collections.Generic;

namespace TalentSphere.Models;

public partial class Skill
{
    public int SkillId { get; set; }

    public int UserId { get; set; }

    public string SkillName { get; set; } = null!;

    public virtual User User { get; set; } = null!;
}
