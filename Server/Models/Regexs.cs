using System.Text.RegularExpressions;

namespace Guess_the_word.Models
{
    public class Regexs
    {
        public static readonly Regex email = new Regex(@"^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,6}$");
        public static readonly Regex password = new Regex(@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$");
    }
}
