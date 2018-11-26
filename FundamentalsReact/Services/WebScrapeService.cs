using Hobbyist.Services.Interfaces;
using Hobbyist.Services.Interfaces.RandomQuotes;
using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;

namespace Hobbyist.Services
{
    public class WebScrapeService : IWebScrapeService
    {
        public RandomQuote WebScrape()
        {
            string quote = "";
            string author = "";
            string[] keywords = new string[] { "creativity", "innovation", "engineering" };

            Random randomKey = new Random();
            int ndx = randomKey.Next(0, keywords.Length);

            HtmlDocument doc = new HtmlDocument();

            doc.OptionFixNestedTags = true;
            string url = "https://www.brainyquote.com/search_results?q=" + keywords[ndx];

            HttpWebRequest req = HttpWebRequest.Create(url) as HttpWebRequest;
            req.Method = "GET";

            /*SART browser signatures*/
            req.UserAgent = "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:31.0) Gecko/20100101 Firefox/31.0";
            req.Accept = "text/html,application/xhtml+xml,application/xml; q=0.9,*/*;q=0.8";
            req.Headers.Add(HttpRequestHeader.AcceptLanguage, "en-us,en;q=0.5");

            WebResponse response = req.GetResponse();
            doc.Load(response.GetResponseStream(), true);

            if (doc.DocumentNode != null)
            {
                var textNodes = doc.DocumentNode.SelectNodes(
                    "html/body//div[contains(@class, 'bq_center')]/div//div[contains(@class,'new-msnry-grid bqcpx')]");
                
                if (textNodes != null && textNodes.Any())
                {
                    Random random = new Random();
                    int randomNumber = random.Next(0, 20);


                    foreach (var textNode in textNodes)
                    {
                        var Quote = textNode.SelectSingleNode("div[contains(@id,'qpos_1_" + randomNumber + "')]/div/div//a[contains(@class, 'oncl_q') and contains(@class, 'b-qt')]"); //Grab the first instance of 'a' tag.
                        var Author = textNode.SelectSingleNode("div[contains(@id,'qpos_1_" + randomNumber + "')]/div/div//a[contains(@class, 'oncl_a') and contains(@class, 'bq-aut')]"); //Grab the second instance of 'a' tag.
                        author += WebUtility.HtmlDecode(Author.InnerText);
                        quote += WebUtility.HtmlDecode(Quote.InnerText);
                        break;
                    }
                }
            }
            return (new RandomQuote {
                Author = author,
                Quote = quote
            });
        }
    }
}