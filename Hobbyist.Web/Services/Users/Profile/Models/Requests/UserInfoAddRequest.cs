using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Users.Profile.Models.Requests
{
    public class UserInfoAddRequest
    {
        [Required]
        public int UserBaseId { get; set; }
        
        public string FirstName { get; set; }
        
        public string LastName { get; set; }
        
        public string UserAvatar { get; set; }
      
        public string Bio { get; set; }
       
        public string DateOfBirth { get; set; }
        [Required]
        public int Interest { get; set; }
    }
}