using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace selectid.Models
{
    public partial class onlinebloodbankContext : DbContext
    {
        public onlinebloodbankContext()
        {
        }

        public onlinebloodbankContext(DbContextOptions<onlinebloodbankContext> options)
            : base(options)
        {
        }

        public virtual DbSet<BloodDetails> BloodDetails { get; set; }
        public virtual DbSet<Faq> Faq { get; set; }
        public virtual DbSet<SlotDetails> SlotDetails { get; set; }
        public virtual DbSet<UserDetails> UserDetails { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer("Server=(local);Database=onlinebloodbank;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BloodDetails>(entity =>
            {
                entity.ToTable("blood_details");

                entity.Property(e => e.Area)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.BloodGroup)
                    .IsRequired()
                    .HasColumnName("Blood_Group")
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.PinCode).HasColumnName("Pin_Code");

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.BloodDetails)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__blood_det__UserI__1367E606");
            });

            modelBuilder.Entity<Faq>(entity =>
            {
                entity.ToTable("faq");

                entity.Property(e => e.Answers)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Questions)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Faq)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__faq__UserId__1920BF5C");
            });

            modelBuilder.Entity<SlotDetails>(entity =>
            {
                entity.HasKey(e => e.SlotId);

                entity.ToTable("slot_details");

                entity.Property(e => e.SlotId).HasColumnName("Slot_id");

                entity.Property(e => e.City)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.DateForDonating)
                    .HasColumnName("Date_for_donating")
                    .HasColumnType("date");

                entity.Property(e => e.FeedBack)
                    .HasMaxLength(500)
                    .IsUnicode(false);

                entity.Property(e => e.Hospital)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.TimeForDonating)
                    .IsRequired()
                    .HasColumnName("Time_for_donating")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.SlotDetails)
                    .HasForeignKey(d => d.UserId)
                    .HasConstraintName("FK__slot_deta__UserI__164452B1");
            });

            modelBuilder.Entity<UserDetails>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.ToTable("user_details");

                entity.Property(e => e.Area)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.BloodGroup)
                    .IsRequired()
                    .HasColumnName("Blood_Group")
                    .HasMaxLength(5)
                    .IsUnicode(false);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnName("First_Name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Gender)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnName("Last_Name")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Pass)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);

                entity.Property(e => e.PinCode).HasColumnName("Pin_Code");

                entity.Property(e => e.Role)
                    .HasMaxLength(10)
                    .IsUnicode(false)
                    .HasDefaultValueSql("('User')");

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);
            });
        }
    }
}
