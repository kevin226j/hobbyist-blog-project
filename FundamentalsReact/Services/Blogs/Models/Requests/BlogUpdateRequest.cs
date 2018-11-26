using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Blogs.Models.Requests
{
    public class BlogUpdateRequest : BlogAddRequest
    {
        [Required]
        public int Id { get; set; }
    }
}