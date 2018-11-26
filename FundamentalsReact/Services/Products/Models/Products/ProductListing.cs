using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Products.Models.Products
{
    public class ProductListing
    {
        public int Id { get; set; }
        public double Price { get; set; }
        public int UserBaseId { get; set; }
        public string UrlLocation { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}