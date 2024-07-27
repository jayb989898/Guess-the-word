using Guess_the_word.Models;
using Guess_the_word.Models.DTO;

namespace Guess_the_word.Services.CheckRequests
{
    public interface ICheckRequestService
    {
        public GenericResponse CheckRegisterRequest(RegisterRequestDTO request);
    }
}
