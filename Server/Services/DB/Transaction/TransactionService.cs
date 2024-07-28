using Guess_the_word.Controllers;
using Guess_the_word.Database;
using Guess_the_word.Database.Tables;
using Guess_the_word.Services.CheckRequests;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace Guess_the_word.Services.DB.Transaction
{
    public class TransactionService : ITransactionService
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<AnagraphController> _logger;
        private readonly IDbContextFactory<ApplicationDbContext> _contextFactory;

        public TransactionService(IConfiguration configuration, ILogger<AnagraphController> logger, IDbContextFactory<ApplicationDbContext> contextFactory)
        {
            _configuration = configuration;
            _logger = logger;
            _contextFactory = contextFactory;
        }
    }
}
