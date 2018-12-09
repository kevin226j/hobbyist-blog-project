using Hobbyist.Models.Products;
using Hobbyist.Models.Response;
using Hobbyist.Services.Products.Interfaces;
using Hobbyist.Services.Products.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hobbyist.Controllers.Api.Products
{
    [RoutePrefix("api/products")]
    public class ProductController : ApiController
    {
        IProductService _productService;
        public ProductController (IProductService productService)
        {
            _productService = productService;
        }

        [Route(),HttpGet]
        public IHttpActionResult GetAll()
        {
            try {
                return Ok(new ItemsResponse<Product>
                {
                    Items = _productService.GetAll(),
                    IsSuccessful = true
                });
            }
            catch (Exception ex){ return BadRequest(ex.Message); }
        }

        [Route("{id:int}"), HttpGet]
        public IHttpActionResult GetById(int id)
        {
            try {
                return Ok(new ItemResponse<Product>
                {
                    Item = _productService.GetById(id),
                    IsSuccessful = true
                });
            }
            catch (Exception ex){ return BadRequest(ex.Message); }
        }

        [Route(), HttpPost]
        public IHttpActionResult Post(ProductAddRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _productService.Insert(model),
                    IsSuccessful = true
                };
                return Ok(response);
            }
            catch (Exception ex){ return BadRequest(ex.Message); }
        }

        [Route(), HttpPut]
        public IHttpActionResult Put(ProductUpdateRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _productService.Update(model),
                    IsSuccessful = true
                };
                return Ok();
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

        [Route("{id:int}"), HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _productService.Delete(id),
                    IsSuccessful = true
                };
                return Ok();
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

    }
}
