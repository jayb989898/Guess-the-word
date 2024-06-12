using System.ComponentModel.DataAnnotations;

namespace Guess_the_word.Database.Tables
{
    public class QuizLanguages
    {
        public int Id { get; set; }
        public required string Name { get; set; }
    }
}
