using Hobbyist.Models.Response;
using Hobbyist.Services.Products.Interfaces;
using Hobbyist.Services.Products.Models.Products;
using Hobbyist.Services.Products.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hobbyist.Controllers.Api.Products
{
    [RoutePrefix("api/productlistings")]
    public class ProductListingController : ApiController
    {
        IProductListingService _productListingService;
        public ProductListingController(IProductListingService productListingService)
        {
            _productListingService = productListingService;
        }

        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                return Ok(new ItemsResponse<ProductListing>
                {
                    Items = _productListingService.GetAll(),
                    IsSuccessful = true
                });
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

        [Route("{id:int}"), HttpGet]
        public IHttpActionResult GetById(int id)
        {
            try
            {
                return Ok(new ItemResponse<ProductListing>
                {
                    Item = _productListingService.GetById(id),
                    IsSuccessful = true
                });
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

        [Route(), HttpPost]
        public IHttpActionResult Post(ProductListingAddRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _productListingService.Insert(model),
                    IsSuccessful = true
                };
                return Ok(response);
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

        [Route(), HttpPut]
        public IHttpActionResult Put(ProductListingUpdateRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _productListingService.Update(model),
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
                    Item = _productListingService.Delete(id),
                    IsSuccessful = true
                };
                return Ok();
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

    }
}
