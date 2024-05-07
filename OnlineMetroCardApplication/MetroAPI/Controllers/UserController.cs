using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MetroAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace MetroAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public UserController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/User
        [HttpGet]
        public IActionResult GetUser()
        {
            return Ok(_dbContext.users.ToList());
        }

        // GET: api/User/1
        [HttpGet("{id}")]
        public IActionResult GetUser(int id)
        {
            var user = _dbContext.users.FirstOrDefault(u => u.UserID == id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        //Adding a new user
        // POST: api/User
        [HttpPost]
        public IActionResult PostUser([FromBody] UserDetails user)
        {
            _dbContext.users.Add(user);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing user
        // PUT: api/user/1
        [HttpPut("{id}")]
        public IActionResult PutUser(int id, [FromBody] UserDetails user)
        {
            var userOld = _dbContext.users.FirstOrDefault(u => u.UserID == id);
            if (userOld == null)
            {
                return NotFound();
            }
            userOld.Balance = user.Balance;
            userOld.CardNumber = user.CardNumber;
            userOld.UserName = user.UserName;
            userOld.UserID = user.UserID;
            userOld.UserPhoneNumber = user.UserPhoneNumber;
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        //delete
        [HttpDelete("{id}")]
        public IActionResult DeleteUser(int id)
        {
            var user = _dbContext.users.FirstOrDefault(u => u.UserID == id);
            if (user == null)
            {
                return NotFound();
            }
            _dbContext.users.Remove(user);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}