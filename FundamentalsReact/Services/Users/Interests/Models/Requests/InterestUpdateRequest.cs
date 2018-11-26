using Hobbyist.Services.Users.Interests.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Users.Interests.Models.Requests
{
    public class InterestUpdateRequest : InterestAddRequest
    {
        public int Id { get; set; }
    }
}