using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace TalentSphere.Models;

public partial class TalentsphereContext : DbContext
{
    public TalentsphereContext()
    {
    }

    public TalentsphereContext(DbContextOptions<TalentsphereContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Application> Applications { get; set; }

    public virtual DbSet<Certification> Certifications { get; set; }

    public virtual DbSet<DirectorReq> DirectorReqs { get; set; }

    public virtual DbSet<JobPost> JobPosts { get; set; }

    public virtual DbSet<Skill> Skills { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=tcp:talent-sphere.database.windows.net,1433;Initial Catalog=talentsphere;Persist Security Info=False;User ID=admin123;Password=admin@123;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Application>(entity =>
        {
            entity.HasKey(e => e.ApplicationId).HasName("PK__applicat__3BCBDCF2BC4C6F3F");

            entity.ToTable("applications");

            entity.Property(e => e.ApplicationId).HasColumnName("application_id");
            entity.Property(e => e.ApplicationDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("application_date");
            entity.Property(e => e.JobPostId).HasColumnName("job_post_id");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValueSql("('applied')")
                .HasColumnName("status");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.JobPost).WithMany(p => p.Applications)
                .HasForeignKey(d => d.JobPostId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_job_post_id");

            entity.HasOne(d => d.User).WithMany(p => p.Applications)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_user_id");
        });

        modelBuilder.Entity<Certification>(entity =>
        {
            entity.HasKey(e => e.CertificationId).HasName("PK__certific__185D5AECAD5FEE4E");

            entity.ToTable("certifications");

            entity.Property(e => e.CertificationId).HasColumnName("certification_id");
            entity.Property(e => e.CertificationDate)
                .HasColumnType("datetime")
                .HasColumnName("certification_date");
            entity.Property(e => e.CertificationName)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("certification_name");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.Certifications)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_employee_id_cert");
        });

        modelBuilder.Entity<DirectorReq>(entity =>
        {
            entity.HasKey(e => e.DirId).HasName("PK__director__D886CF4C42B491DB");

            entity.ToTable("director_reqs");

            entity.Property(e => e.DirId)
                .ValueGeneratedNever()
                .HasColumnName("dir_id");
            entity.Property(e => e.Requirements)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("requirements");

            entity.HasOne(d => d.Dir).WithOne(p => p.DirectorReq)
                .HasForeignKey<DirectorReq>(d => d.DirId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("dir_id");
        });

        modelBuilder.Entity<JobPost>(entity =>
        {
            entity.HasKey(e => e.JobPostId).HasName("PK__job_post__B4FE39B08F0598E6");

            entity.ToTable("job_posts");

            entity.HasIndex(e => e.Title, "uq_title").IsUnique();

            entity.Property(e => e.JobPostId).HasColumnName("job_post_id");
            entity.Property(e => e.Description)
                .HasColumnType("text")
                .HasColumnName("description");
            entity.Property(e => e.NumberOfPeopleRequired).HasColumnName("number_of_people_required");
            entity.Property(e => e.PostedDate)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("posted_date");
            entity.Property(e => e.SkillsRequired)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("skills_required");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasDefaultValueSql("('open')")
                .HasColumnName("status");
            entity.Property(e => e.Title)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("title");
        });

        modelBuilder.Entity<Skill>(entity =>
        {
            entity.HasKey(e => e.SkillId).HasName("PK__skills__FBBA8379EC928EF5");

            entity.ToTable("skills");

            entity.Property(e => e.SkillId).HasColumnName("skill_id");
            entity.Property(e => e.SkillName)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("skill_name");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.User).WithMany(p => p.Skills)
                .HasForeignKey(d => d.UserId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("fk_employee_id_skills");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("PK__users__B9BE370FC0C08BF3");

            entity.ToTable("users");

            entity.HasIndex(e => e.Email, "uq_email").IsUnique();

            entity.HasIndex(e => e.PhoneNumber, "uq_phone_number").IsUnique();

            entity.HasIndex(e => e.Username, "uq_username").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.Email)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("email");
            entity.Property(e => e.FullName)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("full_name");
            entity.Property(e => e.PasswordHash)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("password_hash");
            entity.Property(e => e.PhoneNumber)
                .HasMaxLength(10)
                .IsUnicode(false)
                .HasColumnName("phone_number");
            entity.Property(e => e.Role)
                .HasMaxLength(50)
                .IsUnicode(false)
                .HasColumnName("role");
            entity.Property(e => e.Username)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("username");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
