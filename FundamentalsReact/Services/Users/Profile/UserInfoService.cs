using Hobbyist.DbAccess.Tools;
using Hobbyist.Services.Users.Profile.Interfaces;
using Hobbyist.Services.Users.Profile.Models;
using Hobbyist.Services.Users.Profile.Models.Requests;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Users.Profile
{
    public class UserInfoService : BaseService, IUserInfoService
    {
        public List<UserInfo> GetAll()
        {
            return Adapter.LoadObject<UserInfo>(
                "dbo.UserInfo_SelectAll");
        }

        public UserInfo GetById(int id)
        {
            return Adapter.LoadObject<UserInfo>(
                "dbo.UserInfo_SelectById", new[] { SqlDbParameter.Instance.BuildParameter("@id", id, System.Data.SqlDbType.Int) }
                ).FirstOrDefault();
        }

        public int Insert(UserInfoAddRequest model)
        {
            int id = 0;
            Adapter.ExecuteQuery("dbo.UserInfo_Insert", new[] {
                SqlDbParameter.Instance.BuildParameter("@UserBaseId",model.UserBaseId,System.Data.SqlDbType.Int),
                SqlDbParameter.Instance.BuildParameter("@FirstName",model.FirstName,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@LastName",model.LastName,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@UserAvatar", model.UserAvatar, SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Bio",model.Bio,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@DateOfBirth",model.DateOfBirth,System.Data.SqlDbType.Date),
                SqlDbParameter.Instance.BuildParameter("@Interest",model.Interest,System.Data.SqlDbType.Int),
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int, 0, ParameterDirection.Output)
            }, (parameters =>
            {
                id = parameters.GetParmValue<int>("@Id"); //for inserts
            }));
            return id;
        }
        public int Update(UserInfoUpdateRequest model)
        {
            Adapter.ExecuteQuery("dbo.UserInfo_Update", new[] {
                SqlDbParameter.Instance.BuildParameter("@UserBaseId",model.UserBaseId,System.Data.SqlDbType.Int),
                SqlDbParameter.Instance.BuildParameter("@FirstName",model.FirstName,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@LastName",model.LastName,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@UserAvatar", model.UserAvatar, SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Bio",model.Bio,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@DateOfBirth",model.DateOfBirth,System.Data.SqlDbType.Date),
                SqlDbParameter.Instance.BuildParameter("@Interest",model.Interest,System.Data.SqlDbType.Int),
                SqlDbParameter.Instance.BuildParameter("@Id", model.Id, System.Data.SqlDbType.Int)
            });
            return 0;
        }

        public int Delete(int id)
        {
            Adapter.ExecuteQuery("dbo.UserInfo_Delete", new[]
            {
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int)
            });
            return 0;
        }
    }
}