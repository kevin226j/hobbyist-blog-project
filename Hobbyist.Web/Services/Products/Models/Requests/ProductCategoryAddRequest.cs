using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Products.Models.Requests
{
    public class ProductCategoryAddRequest
    {
        [Required]
        public string CategoryName { get; set; }
        [Required]
        public string Description { get; set; }
        public int IsActive { get; set; }
    }
}