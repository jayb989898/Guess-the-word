using Guess_the_word.Controllers;
using Guess_the_word.Database;
using Guess_the_word.Models;
using Guess_the_word.Models.DTO;
using Guess_the_word.Services.DB.Transaction;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

namespace Guess_the_word.Services.CheckRequests
{
    public class CheckRequestService : ICheckRequestService
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<AnagraphController> _logger;
        private readonly IQueryService _queryService;

        public CheckRequestService(IConfiguration configuration, ILogger<AnagraphController> logger, IDbContextFactory<ApplicationDbContext> contextFactory)
        {
            _configuration = configuration;
            _logger = logger;
            _queryService = new QueryService(configuration, logger, contextFactory);
        }


        public async Task<GenericResponse> CheckRegisterRequest(RegisterRequestDTO request)
        {
            GenericResponse response = new GenericResponse();

            try
            {
                bool firstNameIsValid = StringIsValid(request.FirstName);
                if (!firstNameIsValid)
                {
                    response.SetError(ErrorMessages.genericErrorRegister);
                    return response;
                }

                bool lastNameIsValid = StringIsValid(request.LastName);
                if (!lastNameIsValid)
                {
                    response.SetError(ErrorMessages.genericErrorRegister);
                    return response;
                }

                bool emailIsValid = StringIsValid(request.Email);
                if (!emailIsValid)
                {
                    response.SetError(ErrorMessages.genericErrorRegister);
                    return response;
                }

                bool passwordIsValid = StringIsValid(request.Password);
                if (!passwordIsValid)
                {
                    response.SetError(ErrorMessages.genericErrorRegister);
                    return response;
                }

                bool emailNotExist = await _queryService.EmailNotExist(request.Email);
                if (!emailNotExist)
                {
                    response.SetError(ErrorMessages.emailAlreadyRegistered);
                    return response;
                }

                response.SetOk();
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"CheckRequestService \\ CheckRegisterRequest \\ Request: {request}, Message: {ex.Message}, CompleteLog: {ex}");
                response.SetError(ErrorMessages.genericError);
            }

            return response;
        }

        private bool StringIsValid(string value)
        {
            return !string.IsNullOrEmpty(value);
        }
    }
}
