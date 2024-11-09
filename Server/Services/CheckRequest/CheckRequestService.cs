using Guess_the_word.Controllers;
using Guess_the_word.Database;
using Guess_the_word.Models;
using Guess_the_word.Models.DTO;
using Guess_the_word.Services.DB.Transaction;
using Microsoft.EntityFrameworkCore;
using SharedModels;

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



        public GenericResponse CheckRegisterRequest(RegisterRequestDTO request)
        {
            GenericResponse response = new GenericResponse();

            try
            {
                bool firstNameIsValid = StringIsValid(request.FirstName);
                if (!firstNameIsValid)
                {
                    response.SetError(ErrorMessages.fieldIsNotValid);
                    return response;
                }

                bool lastNameIsValid = StringIsValid(request.LastName);
                if (!lastNameIsValid)
                {
                    response.SetError(ErrorMessages.fieldIsNotValid);
                    return response;
                }

                bool emailIsValid = EmailPatternIsValid(request.Email);
                if (!emailIsValid)
                {
                    response.SetError(ErrorMessages.emailIsNotValid);
                    return response;
                }

                bool passwordIsValid = PasswordPatternIsValid(request.Password);
                if (!passwordIsValid)
                {
                    response.SetError(ErrorMessages.passwordIsNotValid);
                    return response;
                }

                response.SetOk();
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"CheckRequestService \\ CheckRegisterRequest \\ Request: {request}, Message: {ex.Message}, CompleteLog: {ex}");
                response.SetError(ErrorMessages.genericError);
                return response;
            }
        }

        public GenericResponse CheckLoginRequest(LoginRequestDTO request)
        {
            GenericResponse response = new GenericResponse();

            try
            {
                bool emailIsValid = EmailPatternIsValid(request.Email);
                if (!emailIsValid)
                {
                    response.SetError(ErrorMessages.emailIsNotValid);
                    return response;
                }

                bool passwordIsValid = PasswordPatternIsValid(request.Password);
                if (!passwordIsValid)
                {
                    response.SetError(ErrorMessages.passwordIsNotValid);
                    return response;
                }

                response.SetOk();
                return response;
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"CheckRequestService \\ CheckLoginRequest \\ Request: {request}, Message: {ex.Message}, CompleteLog: {ex}");
                response.SetError(ErrorMessages.genericError);
                return response;
            }
        }

        private bool StringIsValid(string value)
        {
            return !string.IsNullOrEmpty(value);
        }

        private bool EmailPatternIsValid(string value)
        {
            return Regexs.email.IsMatch(value);
        }

        private bool PasswordPatternIsValid(string value)
        {
            return Regexs.password.IsMatch(value);
        }
    }
}
