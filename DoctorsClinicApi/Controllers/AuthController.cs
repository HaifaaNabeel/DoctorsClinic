using Microsoft.AspNetCore.Mvc;
using DoctorsClinicApi.Data;
using DoctorsClinicApi.DTOs;
using System.Threading.Tasks;
using DoctorsClinicApi.Models;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Microsoft.Extensions.Configuration;
using System;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;


namespace DoctorsClinicApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;
        private readonly IConfiguration _config;
        public AuthController(IAuthRepository repo, IConfiguration config) //IConfiguration for Token
        {
            _config = config;
            _repo = repo;
        }

        [HttpPost("register")]

        public async Task<ActionResult> Register(UserRegister userRegister)
        {
            userRegister.name = userRegister.name.ToLower();
            userRegister.email = userRegister.email;//.ToLower();
            if (await _repo.EmailExists(userRegister.email))
                return BadRequest("this email exists");
            var userCreate = new User
            {
                email = userRegister.email,
                name = userRegister.name

            };

            var CreatedUser = await _repo.Register(userCreate, userRegister.password);

            return StatusCode(201);
        }

        [HttpPost("login")]
        public async Task<ActionResult> Login(UserLogin userLogin)
        {
            var nameFromR = await _repo.Login(userLogin.name.ToLower(), userLogin.password);
            if (nameFromR == null) return Unauthorized();
            ///////////register in token and in appsetting
            var claimslogin = new[]{
               new Claim(ClaimTypes.NameIdentifier,nameFromR.id.ToString()),
               new Claim(ClaimTypes.Name,nameFromR.name)
           };
            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config.GetSection("AppSettings:Token").Value));
            var credsLogin = new SigningCredentials(key, SecurityAlgorithms.HmacSha512);
            var tokenDescrip = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claimslogin),
                Expires = DateTime.Now.AddDays(1),
                SigningCredentials = credsLogin
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescrip);
            return Ok(new
            {
                token = tokenHandler.WriteToken(token)
            });

        }
    }
}