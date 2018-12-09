using Hobbyist.Models.Response;
using Hobbyist.Services.Users.Profile.Interfaces;
using Hobbyist.Services.Users.Profile.Models;
using Hobbyist.Services.Users.Profile.Models.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hobbyist.Controllers.Api.Users
{
    [RoutePrefix("api/profiles")]
    public class ProfileController : ApiController
    {
        IUserInfoService _userInfoService;
        public ProfileController(IUserInfoService userInfoService)
        {
            _userInfoService = userInfoService;
        }

        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                return Ok(new ItemsResponse<UserInfo>
                {
                    Items = _userInfoService.GetAll(),
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
                return Ok(new ItemResponse<UserInfo>
                {
                    Item = _userInfoService.GetById(id),
                    IsSuccessful = true
                });
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

        [Route(), HttpPost]
        public IHttpActionResult Post(UserInfoAddRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _userInfoService.Insert(model),
                    IsSuccessful = true
                };
                return Ok(response);
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

        [Route(), HttpPut]
        public IHttpActionResult Put(UserInfoUpdateRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _userInfoService.Update(model),
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
                    Item = _userInfoService.Delete(id),
                    IsSuccessful = true
                };
                return Ok();
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }
    }
}
