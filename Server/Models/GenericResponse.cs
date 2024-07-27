namespace Guess_the_word.Models
{
    public class GenericResponse
    {
        public bool IsOk { get; set; } = false;
        public string ErrorMessage { get; set; } = string.Empty;

        public void SetOk()
        {
            IsOk = true;
            ErrorMessage = string.Empty;
        }

        public void SetError(string errorMessage)
        {
            IsOk = false;
            ErrorMessage = errorMessage;
        }
    }
}
