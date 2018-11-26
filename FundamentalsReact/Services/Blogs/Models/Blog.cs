using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Blogs.Models
{
    public class Blog
    {
        public int Id { get; set; }
        public int UserBaseId { get; set; }
        public string Name { get; set; }
        public string Body { get; set; }
        public string Image { get; set; }
        public bool IsPublic { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}