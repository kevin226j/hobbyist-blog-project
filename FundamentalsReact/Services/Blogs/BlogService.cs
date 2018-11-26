using Hobbyist.DbAccess.Tools;
using Hobbyist.Services.Blogs.Interfaces;
using Hobbyist.Services.Blogs.Models;
using Hobbyist.Services.Blogs.Models.Requests;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Blogs
{
    public class BlogService : BaseService, IBlogService
    {
        public List<Blog> GetAll()
        {
            return Adapter.LoadObject<Blog>(
                "Blogs_SelectAll");
        }

        public Blog GetById(int id)
        {
            return Adapter.LoadObject<Blog>(
                "Blogs_SelectById", new[] { SqlDbParameter.Instance.BuildParameter("@id", id, System.Data.SqlDbType.Int) }
                ).FirstOrDefault();
        }

        public int Insert(BlogAddRequest model)
        {
            int id = 0;
            Adapter.ExecuteQuery("Blogs_Insert", new[] {
                SqlDbParameter.Instance.BuildParameter("@UserBaseId",model.UserBaseId,System.Data.SqlDbType.Int),
                SqlDbParameter.Instance.BuildParameter("@Name",model.Name,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Body",model.Body,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Image",model.Image,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@IsPublic",model.IsPublic,System.Data.SqlDbType.Bit),
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int, 0, ParameterDirection.Output)
            }, (parameters =>
            {
                id = parameters.GetParmValue<int>("@Id"); //for inserts
            }));
            return id;
        }
        public int Update(BlogUpdateRequest model)
        {
            Adapter.ExecuteQuery("Blogs_Update", new[] {
                SqlDbParameter.Instance.BuildParameter("@UserBaseId",model.UserBaseId,System.Data.SqlDbType.Int),
                SqlDbParameter.Instance.BuildParameter("@Name",model.Name,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Body",model.Body,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Image",model.Image,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@IsPublic",model.IsPublic,System.Data.SqlDbType.Bit),
                SqlDbParameter.Instance.BuildParameter("@Id", model.Id, System.Data.SqlDbType.Int)
            });
            return 0;
        }
        public int Delete(int id)
        {
            Adapter.ExecuteQuery("Blogs_Delete", new[]
            {
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int)
            });
            return 0;
        }
    }
}