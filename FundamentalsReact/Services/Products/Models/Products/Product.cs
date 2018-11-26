using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hobbyist.Models.Products
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int ProductListingId { get; set; }
        public string Description { get; set; }
        public string ProductAvatar { get; set; }
        public int UserBaseId { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}