using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JwtAPI.Context;
using JwtAPI.Entities;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace JwtAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class LoginsController : ControllerBase
    {
        private readonly ApplicationDBContext _context;

        public LoginsController(ApplicationDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Login>>> GetLogins()
        {
            return await _context.Logins.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Login>> GetLogin(int id)
        {
            var login = await _context.Logins.FindAsync(id);

            if (login == null)
            {
                return NotFound();
            }

            return login;
        }

        [HttpPost]
        public async Task<ActionResult<Login>> PostLogin(Login login)
        {
            _context.Logins.Add(login);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLogin", new { id = login.Id }, login);
        }

        [HttpPost("LoginIn")]
        [AllowAnonymous]
        public async Task<ActionResult<Login>> LoginIn([FromBody]Login model)
        {
            var response = "";
            var user = await _context.Logins.Where(m => m.User == model.User && m.Password == model.Password).FirstOrDefaultAsync();

            if (user is null)
            {
                response = "No existe registro";
                return BadRequest(response);
            }

            var claims = new[] 
            {
                new Claim(JwtRegisteredClaimNames.Sub, Environment.GetEnvironmentVariable("JWT_SUBJECT")),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(JwtRegisteredClaimNames.Iat, DateTime.UtcNow.ToString()),
                new Claim("Id", user.Id.ToString()),   
                new Claim("User", user.User),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("JWT_KEY")));

            var signIn = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var expireTime = DateTime.UtcNow.AddMinutes(2);
            var audience = Environment.GetEnvironmentVariable("JWT_AUDIENCE");
            var issuer = Environment.GetEnvironmentVariable("JWT_ISSUER");

            JwtSecurityToken token = new JwtSecurityToken
            (
                issuer: issuer,
                audience: audience,
                claims: claims,
                expires: expireTime,
                signingCredentials: signIn
            );

            response = new JwtSecurityTokenHandler().WriteToken(token);

            return Ok(response);
        }
    }
}
