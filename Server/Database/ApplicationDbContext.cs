using Guess_the_word.Database.Tables;
using Guess_the_word.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage;

namespace Guess_the_word.Database
{
    public class ApplicationDbContext : IdentityDbContext<IdentityUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        public DbSet<QuizLanguages> QuizLanguages { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            //customizations
            builder.HasDefaultSchema("guessTheWordDatabase");


            builder.Entity<QuizLanguages>(entity =>
            {
                entity.Property(e => e.Name).IsRequired();
            });


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
            this.Database.EnsureCreated();

            bool exist = this.Database.GetService<IRelationalDatabaseCreator>().Exists();

            return exist;
        }
    }
}
