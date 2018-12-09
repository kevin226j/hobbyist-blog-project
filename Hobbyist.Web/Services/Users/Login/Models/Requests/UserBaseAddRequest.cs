using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Users.Login.Models.Requests
{
    public class UserBaseAddRequest
    {
        [Required]
        public string Email { get; set; }

        public string PasswordHash { get; set; }

        public string Salt { get; set; }

        public bool IsAccountLocked { get; set; }

        public string Password { get; set; }
    }
}