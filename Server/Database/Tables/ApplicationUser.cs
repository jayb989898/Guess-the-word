using Guess_the_word.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc.ViewFeatures;
using System.Reflection.Metadata;

namespace Guess_the_word.Database.Tables
{
    public class ApplicationUser : IdentityUser
    {
        public QuizLanguagesEnum QuizLanguageId { get; set; }
        public QuizLanguages? QuizLanguages { get; set; }
        public byte[]? ThumbnailImage { get; set; }

        public ApplicationUser() { }

        public ApplicationUser(string email, QuizLanguagesEnum quizLanguage, byte[]? thumbnailImage = null)
        {
            UserName = email;
            Email = email;
            QuizLanguageId = quizLanguage;
            ThumbnailImage = thumbnailImage;
        }
    }
}
