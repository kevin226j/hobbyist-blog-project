using System.Collections.Generic;
using Hobbyist.Services.Products.Models.Products;
using Hobbyist.Services.Products.Models.Requests;

namespace Hobbyist.Services.Products.Interfaces
{
    public interface IProductListingService
    {
        int Delete(int id);
        List<ProductListing> GetAll();
        ProductListing GetById(int id);
        int Insert(ProductListingAddRequest model);
        int Update(ProductListingUpdateRequest model);
    }
}