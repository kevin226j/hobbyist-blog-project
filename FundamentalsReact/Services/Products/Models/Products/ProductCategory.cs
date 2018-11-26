using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Products.Models.Products
{
    public class ProductCategory
    {
        public int Id { get; set; }
        public string CategoryName { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}