using Guess_the_word.Database;
using Guess_the_word.Database.Tables;
using Guess_the_word.Models;
using Guess_the_word.Models.DTO;
using Guess_the_word.Services.CheckRequests;
using Microsoft.AspNetCore.Identity;
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
        private readonly ICheckRequestService _checkRequestService;
        private readonly UserManager<ApplicationUser> _userManager;

        public AuthController(IConfiguration configuration, ILogger<AnagraphController> logger, ICheckRequestService checkRequestService, UserManager<ApplicationUser> userManager)
        {
            _configuration = configuration;
            _logger = logger;
            _checkRequestService = checkRequestService;
            _userManager = userManager;
        }

        [HttpPost("Register")]
        public IActionResult Register([FromBody] RegisterRequestDTO request)
        {
            try
            {
                GenericResponse requestIsValid = _checkRequestService.CheckRegisterRequest(request);
                if (!requestIsValid.IsOk)
                {
                    throw new Exception();
                }

                _userManager.CreateAsync(new ApplicationUser(request.Email, request.QuizLanguageId, request.ThumbnailImage));

                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"ErrorCritical \\ AuthController \\ Register \\ Request: {request}, Message: {ex.Message}, CompleteLog: {ex}");
                return StatusCode(StatusCodes.Status500InternalServerError, "Cannot perform the registration, try later!");
            }
        }
    }
}
