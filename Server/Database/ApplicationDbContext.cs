using Guess_the_word.Database.Tables;
using Guess_the_word.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace Guess_the_word.Database
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<Users> Users { get; set; }
        public DbSet<QuizLanguages> QuizLanguages { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Customizations
            builder.HasDefaultSchema("guessTheWordDatabase");

            // Additional configurations or entities...
            base.OnModelCreating(builder);

            // Seed database with all Enums models
            builder
                .Entity<QuizLanguages>().HasData(
                    Enum.GetValues(typeof(QuizLanguagesEnum))
                        .Cast<QuizLanguagesEnum>()
                        .Select(e => new QuizLanguages()
                        {
                            Id = (int)e,
                            Name = e.ToString()
                        })
                );
        }


        public bool CreateOrUpdateDB()
        {
            Database.EnsureCreated();

            bool exist = Database.GetService<IRelationalDatabaseCreator>().Exists();

            return exist;
        }
    }
}
