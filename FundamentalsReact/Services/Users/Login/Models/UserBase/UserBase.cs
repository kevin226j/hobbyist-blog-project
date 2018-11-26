using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Users.Login.Models.UserBase
{
    public class UserBase
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public string Salt { get; set; }
        public bool IsAccountLocked { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime ModifiedDate { get; set; }
    }
}