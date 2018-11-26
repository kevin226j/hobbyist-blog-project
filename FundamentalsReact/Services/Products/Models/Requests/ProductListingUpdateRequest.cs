using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Products.Models.Requests
{
    public class ProductListingUpdateRequest : ProductListingAddRequest
    {
        public int Id { get; set; }
    }
}