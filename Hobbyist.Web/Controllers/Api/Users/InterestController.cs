using Hobbyist.Models.Response;
using Hobbyist.Services.Users.Interests.Interfaces;
using Hobbyist.Services.Users.Interests.Models;
using Hobbyist.Services.Users.Interests.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hobbyist.Controllers.Api.Users
{
    [RoutePrefix("api/interests")]
    public class InterestController : ApiController
    {
        IInterestService _interestService;
        public InterestController(IInterestService interestService)
        {
            _interestService = interestService;
        }

        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                return Ok(new ItemsResponse<Interest>
                {
                    Items = _interestService.GetAll(),
                    IsSuccessful = true
                });
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }


        [Route(), HttpPost]
        public IHttpActionResult Post(InterestAddRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _interestService.Insert(model),
                    IsSuccessful = true
                };
                return Ok(response);
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
                    Item = _interestService.Delete(id),
                    IsSuccessful = true
                };
                return Ok();
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }
    }
}

