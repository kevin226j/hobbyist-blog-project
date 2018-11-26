using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Products.Models.Requests
{
    public class ProductListingAddRequest
    {
        [Required]
        public double Price { get; set; }
        [Required]
        public int UserBaseId { get; set; }
        [Required]
        public string UrlLocation { get; set; }
    }
}