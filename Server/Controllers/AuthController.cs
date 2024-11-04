using Guess_the_word.Database;
using Guess_the_word.Database.Tables;
using Guess_the_word.Helpers;
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
        private readonly AuthHelper _authHelper;

        public AuthController(IConfiguration configuration, ILogger<AnagraphController> logger, ICheckRequestService checkRequestService, UserManager<ApplicationUser> userManager, IDbContextFactory<ApplicationDbContext> contextFactory)
        {
            _configuration = configuration;
            _logger = logger;
            _checkRequestService = checkRequestService;
            _authHelper = new AuthHelper(configuration, logger, userManager, contextFactory);
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequestDTO request)
        {
            try
            {
                GenericResponse requestIsValid = _checkRequestService.CheckRegisterRequest(request);
                if (!requestIsValid.IsOk)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, requestIsValid.ErrorMessage);
                }

                GenericResponse userRegistered = await _authHelper.Register(request);
                if (!userRegistered.IsOk)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, userRegistered.ErrorMessage);
                }

                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"AuthController \\ Register \\ Request: {request}, Message: {ex.Message}, CompleteLog: {ex}");
                return StatusCode(StatusCodes.Status500InternalServerError, ErrorMessages.genericErrorRegister);
            }
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginRequestDTO request)
        {
            try
            {
                GenericResponse requestIsValid = _checkRequestService.CheckLoginRequest(request);
                if (!requestIsValid.IsOk)
                {
                    return StatusCode(StatusCodes.Status400BadRequest, requestIsValid.ErrorMessage);
                }

                GenericResponse userRegistered = await _authHelper.ValidateLogin(request);
                if (!userRegistered.IsOk)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError, userRegistered.ErrorMessage);
                }

                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"AuthController \\ Login \\ Request: {request}, Message: {ex.Message}, CompleteLog: {ex}");
                return StatusCode(StatusCodes.Status500InternalServerError, ErrorMessages.genericErrorRegister);
            }
        }
    }
}
