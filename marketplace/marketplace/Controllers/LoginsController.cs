using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using marketplace.Models;
using marketplace.Services;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace marketplace.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
  
    public class LoginsController : ControllerBase
    {
        LoginServices api = new LoginServices();

        [HttpPost("LoginIn")]
        [AllowAnonymous]
        public async Task<ActionResult<Login>> LoginIn(Login model)
        {
            var token = api.LoginIn(model);

            if (model is null)
            {
                return BadRequest("No existe registro");
            }
            
            var claims = new List<Claim>
            {
                new Claim("tokenReact", token),
            };

            var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            var authProperties = new AuthenticationProperties
            {

            };
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity), authProperties);

            return Ok(token);


        }
    }
}