using Hobbyist.DbAccess.Tools;
using Hobbyist.Services.Users.Login.Interfaces;
using Hobbyist.Services.Users.Login.Models.Requests;
using Hobbyist.Services.Users.Login.Models.UserBase;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Users.Login
{
    public class LoginService : BaseService, ILoginService
    {
        public List<UserBase> GetAll()
        {
            return Adapter.LoadObject<UserBase>(
                "dbo.UserBaseId_SelectAll");
        }

        public UserBase GetById(int id)
        {
            return Adapter.LoadObject<UserBase>(
                "dbo.UserBaseId_SelectById", new[] { SqlDbParameter.Instance.BuildParameter("@id", id, System.Data.SqlDbType.Int) }
                ).FirstOrDefault();
        }

        public int Insert(UserBaseAddRequest model)
        {
            int id = 0;
            Adapter.ExecuteQuery("dbo.UserBaseId_Insert", new[] {
                SqlDbParameter.Instance.BuildParameter("@Email",model.Email,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@PasswordHash",model.PasswordHash,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Salt", model.Salt, SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@IsAccountLocked",model.IsAccountLocked,System.Data.SqlDbType.Bit),
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int, 0, ParameterDirection.Output)
            }, (parameters =>
            {
                id = parameters.GetParmValue<int>("@Id"); //for inserts
            }));
            return id;
        }
        public int Update(UserBaseUpdateRequest model)
        {
            Adapter.ExecuteQuery("dbo.UserBaseId_Update", new[] {
                SqlDbParameter.Instance.BuildParameter("@Email",model.Email,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@PasswordHash",model.PasswordHash,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Salt", model.Salt, SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@IsAccountLocked",model.IsAccountLocked,System.Data.SqlDbType.Bit),
                SqlDbParameter.Instance.BuildParameter("@Id", model.Id, System.Data.SqlDbType.Int)
            });
            return 0;
        }

        public int Delete(int id)
        {
            Adapter.ExecuteQuery("dbo.UserBaseId_Delete", new[]
            {
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int)
            });
            return 0;
        }
    }
}
