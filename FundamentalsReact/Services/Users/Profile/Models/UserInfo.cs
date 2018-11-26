using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Users.Profile.Models
{
    public class UserInfo
    {
        public int Id { get; set; }
        public int UserBaseId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserAvatar { get; set; }
        public string Bio { get; set; }
        public DateTime DateOfBirth { get; set; }
        public int Interest { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}