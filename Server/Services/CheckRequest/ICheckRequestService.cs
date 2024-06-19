using Guess_the_word.Models.DTO;

namespace Guess_the_word.Services.CheckRequests
{
    public interface ICheckRequestService
    {
        public bool CheckRegisterRequest(RegisterRequestDTO request);
    }
}
