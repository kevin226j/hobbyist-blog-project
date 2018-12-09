using System.Collections.Generic;
using Hobbyist.Services.Users.Login.Models.Requests;
using Hobbyist.Services.Users.Login.Models.UserBase;

namespace Hobbyist.Services.Users.Login.Interfaces
{
    public interface ILoginService
    {
        int Delete(int id);
        List<UserBase> GetAll();
        UserBase GetById(int id);
        int Insert(UserBaseAddRequest model);
        int Update(UserBaseUpdateRequest model);
    }
}