using Hobbyist.Models.Response;
using Hobbyist.Services.Users.Login.Interfaces;
using Hobbyist.Services.Users.Login.Models.Requests;
using Hobbyist.Services.Users.Login.Models.UserBase;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hobbyist.Controllers.Api.Users
{
    [RoutePrefix("api/logins")]
    public class LoginController : ApiController
    {
        ILoginService _loginService;
        public LoginController(ILoginService loginService)
        {
            _loginService = loginService;
        }

        [Route(), HttpGet]
        public IHttpActionResult GetAll()
        {
            try
            {
                return Ok(new ItemsResponse<UserBase>
                {
                    Items = _loginService.GetAll(),
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
                return Ok(new ItemResponse<UserBase>
                {
                    Item = _loginService.GetById(id),
                    IsSuccessful = true
                });
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

        [Route(), HttpPost]
        public IHttpActionResult Post(UserBaseAddRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _loginService.Insert(model),
                    IsSuccessful = true
                };
                return Ok(response);
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }

        [Route(), HttpPut]
        public IHttpActionResult Put(UserBaseUpdateRequest model)
        {
            try
            {
                ItemResponse<int> response = new ItemResponse<int>
                {
                    Item = _loginService.Update(model),
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
                    Item = _loginService.Delete(id),
                    IsSuccessful = true
                };
                return Ok();
            }
            catch (Exception ex) { return BadRequest(ex.Message); }
        }
    }
}
