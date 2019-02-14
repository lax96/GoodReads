using System;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;

namespace GoodReads.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : Controller
    {
        public readonly IConfiguration Configuration;

        public TokenController(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        [AllowAnonymous]
        [HttpGet("login")]
        public string Login(string username, string password)
        {
            if (username == password)
            {
                var jWTSettings = Configuration.GetSection("JWTSettings").Get<JWTSettings>();
                var signingKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jWTSettings.SecretKey));
                var signingCredentials = new SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256);

                var securityToken = new JwtSecurityToken(jWTSettings.Issuer, jWTSettings.Audience
                                                , null, null, DateTime.Now.AddMinutes(2), signingCredentials);

                return JsonConvert.SerializeObject(new JwtSecurityTokenHandler()
                                    .WriteToken(securityToken));
            }
            else
            {
                return null;
            }
        }
    }
}