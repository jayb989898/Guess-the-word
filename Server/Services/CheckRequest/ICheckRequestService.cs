using Guess_the_word.Models.DTO;
using SharedModels;

namespace Guess_the_word.Services.CheckRequests
{
    public interface ICheckRequestService
    {
        public GenericResponse CheckRegisterRequest(RegisterRequestDTO request);

        public GenericResponse CheckLoginRequest(LoginRequestDTO request);
    }
}
