using Guess_the_word.Controllers;
using Guess_the_word.Database;
using Guess_the_word.Models;
using Guess_the_word.Models.DTO;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace Guess_the_word.Services.CheckRequests
{
    public class CheckRequestService : ICheckRequestService
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<AnagraphController> _logger;
        private readonly IDbContextFactory<ApplicationDbContext> _contextFactory;

        public CheckRequestService(IConfiguration configuration, ILogger<AnagraphController> logger, IDbContextFactory<ApplicationDbContext> contextFactory)
        {
            _configuration = configuration;
            _logger = logger;
            _contextFactory = contextFactory;
        }


        public GenericResponse CheckRegisterRequest(RegisterRequestDTO request)
        {
            GenericResponse response = new GenericResponse();

            try
            {
                StringIsValid(request.FirstName);
                StringIsValid(request.LastName);
                StringIsValid(request.Email);
                StringIsValid(request.Password);

                response.SetOk();
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"ErrorCritical \\ CheckRequestService \\ CheckRegisterRequest \\ Request: {request}, Message: {ex.Message}, CompleteLog: {ex}");
                response.SetError(ErrorMessages.genericError);
            }

            return response;
        }

        private void StringIsValid(string value)
        {
            if (!string.IsNullOrEmpty(value))
            {
                throw new Exception();
            }
        }
    }
}
