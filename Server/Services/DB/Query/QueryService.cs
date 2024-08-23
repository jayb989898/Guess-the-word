using Guess_the_word.Controllers;
using Guess_the_word.Database;
using Guess_the_word.Database.Tables;
using Microsoft.EntityFrameworkCore;

namespace Guess_the_word.Services.DB.Transaction
{
    public class QueryService : IQueryService
    {
        private readonly IConfiguration _configuration;
        private readonly ILogger<AnagraphController> _logger;
        private readonly IDbContextFactory<ApplicationDbContext> _contextFactory;

        public QueryService(IConfiguration configuration, ILogger<AnagraphController> logger, IDbContextFactory<ApplicationDbContext> contextFactory)
        {
            _configuration = configuration;
            _logger = logger;
            _contextFactory = contextFactory;
        }

        public async Task<bool> EmailNotExist(string email)
        {
            try
            {
                using (var context = _contextFactory.CreateDbContext())
                {
                    ApplicationUser? user = await context.Users.FirstOrDefaultAsync(x => x.Email == email);

                    return user == null ? true : false;
                }
            }
            catch (Exception ex)
            {
                _logger.LogCritical($"QueryService \\ EmailNotExist \\ email: {email}, Message: {ex.Message}, CompleteLog: {ex}");
                return false;
            }
        }
    }
}
