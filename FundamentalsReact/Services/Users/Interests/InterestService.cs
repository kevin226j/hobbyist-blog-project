using Hobbyist.DbAccess.Tools;
using Hobbyist.Services.Users.Interests.Interfaces;
using Hobbyist.Services.Users.Interests.Models;
using Hobbyist.Services.Users.Interests.Models.Requests;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Users.Interests
{
    public class InterestService : BaseService, IInterestService
    {
        public List<Interest> GetAll()
        {
            return Adapter.LoadObject<Interest>(
                "dbo.Interest_SelectAll");
        }

        public int Insert(InterestAddRequest model)
        {
            int id = 0;
            Adapter.ExecuteQuery("dbo.Interest_Insert", new[] {
                SqlDbParameter.Instance.BuildParameter("@InterestName",model.InterestName,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int, 0, ParameterDirection.Output)
            }, (parameters =>
            {
                id = parameters.GetParmValue<int>("@Id"); //for inserts
            }));
            return id;
        }

        public int Delete(int id)
        {
            Adapter.ExecuteQuery("dbo.Interest_Delete", new[]
            {
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int)
            });
            return 0;
        }
    }
}