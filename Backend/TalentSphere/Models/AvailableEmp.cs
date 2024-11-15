﻿using System;
using System.Collections.Generic;

namespace TalentSphere.Models;

public partial class AvailableEmp
{
    public int EmpId { get; set; }

    public string? Skill { get; set; }

    public virtual User Emp { get; set; } = null!;
}
