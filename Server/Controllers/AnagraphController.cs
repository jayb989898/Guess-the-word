using Guess_the_word.Database;
using Guess_the_word.Database.Tables;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Guess_the_word.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AnagraphController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<AnagraphController> _logger;
        private readonly IDbContextFactory<ApplicationDbContext> _contextFactory;

        public AnagraphController(IConfiguration configuration, ILogger<AnagraphController> logger, IDbContextFactory<ApplicationDbContext> contextFactory)
        {
            _configuration = configuration;
            _logger = logger;
            _contextFactory = contextFactory;
        }

        [HttpGet("QuizLanguages")]
        public IActionResult QuizLanguages()
        {
            try
            {
                using (var context = _contextFactory.CreateDbContext())
                {
                    List<QuizLanguages> quizLanguages = context.QuizLanguages.ToList();
                    return Ok(quizLanguages);
                }
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"ErrorCritical \\ AnagraphController \\ GetQuizLanguages \\ Message: {ex.Message}, CompleteLog: {ex}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Cannot get data!");
            }
        }
    }
}
