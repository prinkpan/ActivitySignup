using ActivitySignup.Models;
using Microsoft.EntityFrameworkCore;

namespace ActivitySignup.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options) { }

        public DbSet<Signup> Signups { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Signup>()
                .Property(p => p.Firstname)
                .HasMaxLength(50)
                .IsRequired();

            builder.Entity<Signup>()
                .Property(p => p.Lastname)
                .HasMaxLength(50)
                .IsRequired();

            builder.Entity<Signup>()
                .Property(p => p.Email)
                .IsRequired();

            builder.Entity<Signup>()
                .Property(p => p.Comments)
                .HasMaxLength(500)
                .IsRequired();
        }
    }
}
