using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Blogs.Models.Requests
{
    public class BlogAddRequest
    {
        [Required]
        public int UserBaseId { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Body { get; set; }
        [Required]
        public string Image { get; set; }
        [Required]
        public bool IsPublic { get; set; }
    }
}