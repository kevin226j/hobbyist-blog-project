using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Products.Models.Requests
{
    public class ProductUpdateRequest : ProductAddRequest
    {
        [Required]
        public int Id { get; set; }
    }
}