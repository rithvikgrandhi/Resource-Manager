using System;
using System.Collections.Generic;

namespace TalentSphere.Models;

public partial class User
{
    public int UserId { get; set; }

    public string Username { get; set; } = null!;

    public string PasswordHash { get; set; } = null!;

    public string Role { get; set; } = null!;

    public string FullName { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string? PhoneNumber { get; set; }

    public virtual ICollection<Application> Applications { get; set; } = new List<Application>();

    public virtual ICollection<Certification> Certifications { get; set; } = new List<Certification>();

    public virtual DirectorReq? DirectorReq { get; set; }

    public virtual ICollection<Skill> Skills { get; set; } = new List<Skill>();
}
