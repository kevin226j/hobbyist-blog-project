using System.Collections.Generic;
using Hobbyist.Models.Products;
using Hobbyist.Services.Products.Models.Requests;

namespace Hobbyist.Services.Products.Interfaces
{
    public interface IProductService
    {
        List<Product> GetAll();
        Product GetById(int id);
        int Insert(ProductAddRequest model);
        int Update(ProductUpdateRequest model);
        int Delete(int id);
    }
}