using System.Collections.Generic;
using Hobbyist.Services.Users.Interests.Models;
using Hobbyist.Services.Users.Interests.Models.Requests;

namespace Hobbyist.Services.Users.Interests.Interfaces
{
    public interface IInterestService
    {
        int Delete(int id);
        List<Interest> GetAll();
        int Insert(InterestAddRequest model);
    }
}