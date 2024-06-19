using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Reflection.Metadata;

namespace Guess_the_word.Database.Tables
{
    public class Users
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public byte[]? ThumbnailImage { get; set; }

        [ForeignKey("QuizLanguage_Id")]
        public required QuizLanguages QuizLanguage { get; set; }
        public required int QuizLanguage_Id { get; set; }

        public required int PasswordHashed { get; set; }
    }
}
