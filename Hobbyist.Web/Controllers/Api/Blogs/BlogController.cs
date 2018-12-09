using Hobbyist.Models.Response;
using Hobbyist.Services.Blogs.Interfaces;
using Hobbyist.Services.Blogs.Models;
using Hobbyist.Services.Blogs.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hobbyist.Controllers.Api.Blogs
{
    [RoutePrefix("api/blogs")]
    public class BlogController : ApiController
    {
        IBlogService _blogService;
        public BlogController(IBlogService blogService)
        {
            _blogService = blogService;
        }

        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                return Ok(new ItemsResponse<Blog>
                {
                    Items = _blogService.GetAll(),
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
                return Ok(new ItemResponse<Blog>
                {
                    Item = _blogService.GetById(id),
                    IsSuccessful = true
                });
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

        [Route(), HttpPost]
        public IHttpActionResult Post(BlogAddRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _blogService.Insert(model),
                    IsSuccessful = true
                };
                return Ok(response);
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

        [Route(), HttpPut]
        public IHttpActionResult Put(BlogUpdateRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _blogService.Update(model),
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
                    Item = _blogService.Delete(id),
                    IsSuccessful = true
                };
                return Ok();
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }
    }
}
