using Hobbyist.DbAccess.Tools;
using Hobbyist.Models.Products;
using Hobbyist.Services.Products.Interfaces;
using Hobbyist.Services.Products.Models.Requests;
using System.Collections.Generic;
using System.Data;
using System.Linq;

namespace Hobbyist.Services.Products
{
    public class ProductService : BaseService, IProductService
    {
        public List<Product> GetAll()
        {
            return Adapter.LoadObject<Product>(
                "dbo.Product_Product_SelectAll");
        }

        public Product GetById(int id)
        {
            return Adapter.LoadObject<Product>(
                "dbo.Product_Product_SelectById", new[] { SqlDbParameter.Instance.BuildParameter("@id", id, System.Data.SqlDbType.Int) }
                ).FirstOrDefault();
        }

        public int Insert(ProductAddRequest model)
        {
            int id = 0;
            Adapter.ExecuteQuery("Product_Product_Insert", new[] {
                SqlDbParameter.Instance.BuildParameter("@Name",model.Name,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@ProductListingId", model.ProductListingId, System.Data.SqlDbType.Int),
                SqlDbParameter.Instance.BuildParameter("@Description", model.Description, System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@ProductAvatar", model.ProductAvatar, System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@UserBaseId", model.UserBaseId, System.Data.SqlDbType.Int),
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int, 0, ParameterDirection.Output)
            }, (parameters =>
            {
                id = parameters.GetParmValue<int>("@Id"); //for inserts
            }));
            return id;
        }
        public int Update(ProductUpdateRequest model)
        {
            Adapter.ExecuteQuery("Product_Product_Update", new[] {
                 SqlDbParameter.Instance.BuildParameter("@Name",model.Name,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@ProductListingId", model.ProductListingId, System.Data.SqlDbType.Int),
                SqlDbParameter.Instance.BuildParameter("@Description", model.Description, System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@ProductAvatar", model.ProductAvatar, System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@UserBaseId", model.UserBaseId, System.Data.SqlDbType.Int),
                SqlDbParameter.Instance.BuildParameter("@Id", model.Id, System.Data.SqlDbType.Int)
            });
            return 0;
        }

        public int Delete(int id)
        {
            Adapter.ExecuteQuery("Product_Product_Delete", new[]
            {
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int)
            });
            return 0;
    }
    }
}