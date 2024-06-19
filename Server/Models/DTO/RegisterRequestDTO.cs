namespace Guess_the_word.Models.DTO
{
    public class RegisterRequestDTO
    {
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        public required string Email { get; set; }
        public byte[]? ThumbnailImage { get; set; }
        public required int QuizLanguage_Id { get; set; }
        public required string Password { get; set; }
    }
}
