using Hobbyist.DbAccess.Tools;
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
    public class ProductListingService : BaseService, IProductListingService
    {
        public List<ProductListing> GetAll()
        {
            return Adapter.LoadObject<ProductListing>(
                "Product_Listing_SelectAll");
        }

        public ProductListing GetById(int id)
        {
            return Adapter.LoadObject<ProductListing>(
                "dbo.Product_Listing_SelectById", new[] { SqlDbParameter.Instance.BuildParameter("@id", id, System.Data.SqlDbType.Int) }
                ).FirstOrDefault();
        }

        public int Insert(ProductListingAddRequest model)
        {
            int id = 0;
            Adapter.ExecuteQuery("Product_Listing_Insert", new[] {
                SqlDbParameter.Instance.BuildParameter("@Price",model.Price,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@UserBaseId", model.UserBaseId, System.Data.SqlDbType.Int),
                SqlDbParameter.Instance.BuildParameter("@UrlLocation", model.UrlLocation, System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int, 0, ParameterDirection.Output)
            }, (parameters =>
            {
                id = parameters.GetParmValue<int>("@Id"); //for inserts
            }));
            return id;
        }
        public int Update(ProductListingUpdateRequest model)
        {
            Adapter.ExecuteQuery("Product_Listing_Update", new[] {
                SqlDbParameter.Instance.BuildParameter("@Price",model.Price,System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@UserBaseId", model.UserBaseId, System.Data.SqlDbType.Int),
                SqlDbParameter.Instance.BuildParameter("@UrlLocation", model.UrlLocation, System.Data.SqlDbType.NVarChar),
                SqlDbParameter.Instance.BuildParameter("@Id", model.Id, System.Data.SqlDbType.Int)
            });
            return 0;
        }

        public int Delete(int id)
        {
            Adapter.ExecuteQuery("Product_Listing_Delete", new[]
            {
                SqlDbParameter.Instance.BuildParameter("@Id", id, System.Data.SqlDbType.Int)
            });
            return 0;
        }
    }
}