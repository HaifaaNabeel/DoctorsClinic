using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DoctorsClinicApi.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DoctorsClinicApi.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
            
        }

        // GET api/values
        [AllowAnonymous]
        [HttpGet]
        public async Task<ActionResult> GetUsers()
        {
            var Users=await   _context.Users.ToListAsync();
            return Ok(Users);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public async Task<ActionResult> GetUser(int id)
        {
            var user =await _context.Users.FirstOrDefaultAsync(x=>x.id==id);
            return Ok(user);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
