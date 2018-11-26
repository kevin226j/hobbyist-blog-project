using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Products.Models.Requests
{
    public class ProductAddRequest
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public int ProductListingId { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string ProductAvatar { get; set; }
        [Required]
        public int UserBaseId { get; set; }
    }
}