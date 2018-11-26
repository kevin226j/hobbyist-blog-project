using Hobbyist.Services.Interfaces.RandomQuotes;

namespace Hobbyist.Services.Interfaces
{
    public interface IWebScrapeService
    {
        RandomQuote WebScrape();
    }
}