using Guess_the_word.Database;
using Guess_the_word.Models.DTO;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Guess_the_word.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<AnagraphController> _logger;
        private readonly IDbContextFactory<ApplicationDbContext> _contextFactory;

        public AuthController(IConfiguration configuration, ILogger<AnagraphController> logger, IDbContextFactory<ApplicationDbContext> contextFactory)
        {
            _configuration = configuration;
            _logger = logger;
            _contextFactory = contextFactory;
        }

        [HttpPost("Register")]
        public IActionResult Register([FromBody] RegisterRequestDTO request)
        {
            try
            {
                throw new NotImplementedException();
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"ErrorCritical \\ AuthController \\ Register \\ Request: {request}, Message: {ex.Message}, CompleteLog: {ex}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Cannot perform the registration, try later!");
            }
        }
    }
}
