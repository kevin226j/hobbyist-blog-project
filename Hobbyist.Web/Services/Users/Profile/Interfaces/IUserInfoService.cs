using System.Collections.Generic;
using Hobbyist.Services.Users.Profile.Models;
using Hobbyist.Services.Users.Profile.Models.Requests;

namespace Hobbyist.Services.Users.Profile.Interfaces
{
    public interface IUserInfoService
    {
        int Delete(int id);
        List<UserInfo> GetAll();
        UserInfo GetById(int id);
        int Insert(UserInfoAddRequest model);
        int Update(UserInfoUpdateRequest model);
    }
}