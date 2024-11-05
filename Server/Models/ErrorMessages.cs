namespace Guess_the_word.Models
{
    public class ErrorMessages
    {
        #region GenericMessages
        public const string genericError = "Internal error, please try later!";
        public const string emailIsNotValid = "Email pattern is not valid.";
        public const string passwordIsNotValid = "Password pattern is not valid.";
        public const string fieldIsNotValid = "One or more fields are invalid.";
        #endregion

        #region AuthControllerMessages
        //Register
        public const string genericErrorRegister = "Cannot perform the registration, try later!";
        public const string emailAlreadyRegistered = "The email you have provided is already associated with an account.";
        //Login
        public const string genericErrorLogin = "Cannot perform the login, try later!";
        public const string emailNotRegistered = "The email you have provided is not associated with an account.";
        public const string loginNotValid = "Incorrect username or password.";
        #endregion
    }
}
