using System.Collections.Generic;
using Hobbyist.Services.Products.Models.Products;
using Hobbyist.Services.Products.Models.Requests;

namespace Hobbyist.Services.Products.Interfaces
{
    public interface IProductCategoryService
    {
        int Delete(int id);
        List<ProductCategory> GetAll();
        ProductCategory GetById(int id);
        int Insert(ProductCategoryAddRequest model);
        int Update(ProductCategoryUpdateRequest model);
    }
}