using Guess_the_word.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;

namespace Guess_the_word.Database.Tables
{
    public class ApplicationUser : IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        [ForeignKey("QuizLanguages")]
        public int QuizLanguageId { get; set; }
        public virtual QuizLanguages? QuizLanguages { get; set; }

        public byte[]? ThumbnailImage { get; set; }

        public ApplicationUser() { }

        public ApplicationUser(string email, string firstName, string lastName, QuizLanguages quizLanguage, byte[]? thumbnailImage = null)
        {
            UserName = email;
            Email = email;
            FirstName = firstName;
            LastName = lastName;
            QuizLanguageId = quizLanguage.Id;
            ThumbnailImage = thumbnailImage;
        }
    }
}
