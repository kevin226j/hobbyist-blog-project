using Hobbyist.DbAccess.Tools;
using Hobbyist.Models.Products;
using Hobbyist.Services.Products.Interfaces;
using Hobbyist.Services.Products.Models.Products;
using Hobbyist.Services.Products.Models.Requests;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;

namespace Hobbyist.Services.Products
{
    public class ProductCategoryService : BaseService, IProductCategoryService
    {
        public List<ProductCategory> GetAll()
        {
            return Adapter.LoadObject<ProductCategory>(
                "Product_Category_SelectAll");
        }

        public ProductCategory GetById(int id)
        {
            return Adapter.LoadObject<ProductCategory>(
                "Product_Category_SelectById", new[] { SqlDbParameter.Instance.BuildParameter("@id", id, System.Data.SqlDbType.Int) }
                ).FirstOrDefault();
        }

        public int Insert(ProductCategoryAddRequest model)
        {
            int id = 0;
            Adapter.ExecuteQuery("Product_Category_Insert", new[] {
                SqlDbParameter.Instance.BuildParameter("@CategoryName",model.CategoryName,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Description", model.Description, System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@IsActive", model.IsActive, System.Data.SqlDbType.Bit),
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int, 0, ParameterDirection.Output)
            }, (parameters =>
            {
                id = parameters.GetParmValue<int>("@Id"); //for inserts
            }));
            return id;
        }
        public int Update(ProductCategoryUpdateRequest model)
        {
            Adapter.ExecuteQuery("dbo.Product_Category_Update", new[] {
                SqlDbParameter.Instance.BuildParameter("@CategoryName",model.CategoryName,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Description", model.Description, System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@IsActive", model.IsActive, System.Data.SqlDbType.Bit),
                SqlDbParameter.Instance.BuildParameter("@Id", model.Id, System.Data.SqlDbType.Int)
            });
            return 0;
        }
        public int Delete(int id)
        {
            Adapter.ExecuteQuery("Product_Category_Delete", new[]
            {
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int)
            });
            return 0;
        }
    }
}