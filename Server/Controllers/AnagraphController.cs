using Guess_the_word.Models;
using Microsoft.AspNetCore.Mvc;

namespace Guess_the_word.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AnagraphController : ControllerBase
    {
        private readonly ILogger<AnagraphController> _logger;

        public AnagraphController(ILogger<AnagraphController> logger)
        {
            _logger = logger;
        }

        [HttpGet("QuizLanguages")]
        public IEnumerable<string> GetQuizLanguages()
        {
            return QuizLanguagesModel.QuizLanguagesList;
        }
    }
}
