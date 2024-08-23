using Guess_the_word.Database;
using Guess_the_word.Database.Tables;
using Guess_the_word.Models;
using Guess_the_word.Models.DTO;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Guess_the_word.Helpers
{
    public class AuthHelper
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger _logger;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly IDbContextFactory<ApplicationDbContext> _contextFactory;

        public AuthHelper(IConfiguration configuration, ILogger logger, UserManager<ApplicationUser> userManager, IDbContextFactory<ApplicationDbContext> contextFactory)
        {
            _configuration = configuration;
            _logger = logger;
            _userManager = userManager;
            _contextFactory = contextFactory;
        }

        public async Task<GenericResponse> Register(RegisterRequestDTO request)
        {
            GenericResponse response = new GenericResponse();
            try
            {
                IdentityResult user = await _userManager.CreateAsync(new ApplicationUser(request.Email, request.FirstName, request.LastName, request.QuizLanguage, request.ThumbnailImage));
                if (user == null || !user.Succeeded)
                {
                    response.SetError(ErrorMessages.genericErrorRegister);
                }

                response.SetOk();
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"AuthHelper \\ Register \\ Request: {request}, Message: {ex.Message}, CompleteLog: {ex}");
                response.SetError(ErrorMessages.genericErrorRegister);
                return response;
            }
        }
    }
}
