﻿using System;
using System.Collections.Generic;

namespace talentSphere.Models;

public partial class Certification
{
    public int CertificationId { get; set; }

    public int UserId { get; set; }

    public string CertificationName { get; set; } = null!;

    public DateTime CertificationDate { get; set; }

    public string? Justification { get; set; }

    public string? Status { get; set; }

    public virtual User User { get; set; } = null!;
}