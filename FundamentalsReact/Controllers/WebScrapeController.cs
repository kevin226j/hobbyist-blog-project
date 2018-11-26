using Hobbyist.Services;
using Hobbyist.Services.Interfaces;
using Hobbyist.Services.Interfaces.RandomQuotes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hobbyist.Controllers
{
    [RoutePrefix("api/webscrape")]
    public class WebScrapeController : ApiController
    {
        IWebScrapeService _webScrapeService;
        public WebScrapeController (IWebScrapeService webScrapeService)
        {
            _webScrapeService = webScrapeService;
        }

        [Route(), HttpGet]
        public RandomQuote Webscrape()
        {
            return _webScrapeService.WebScrape();
        }

    }
}
