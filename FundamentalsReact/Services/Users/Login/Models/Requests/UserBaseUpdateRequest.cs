using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Users.Login.Models.Requests
{
    public class UserBaseUpdateRequest : UserBaseAddRequest
    {
        [Required]
        public int Id { get; set; }
    }
}