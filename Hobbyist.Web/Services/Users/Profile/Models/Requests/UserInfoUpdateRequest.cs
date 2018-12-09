using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Users.Profile.Models.Requests
{
    public class UserInfoUpdateRequest : UserInfoAddRequest
    {
        [Required]
        public int Id { get; set; }
    }
}