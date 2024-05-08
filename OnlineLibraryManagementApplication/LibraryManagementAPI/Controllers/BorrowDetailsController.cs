using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryManagementAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace LibraryManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BorrowDetailsController: ControllerBase
    {
       private readonly ApplicationDBContext _dbContext;
        public BorrowDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/User
        [HttpGet]
        public IActionResult GetBorrowDetails()
        {
            return Ok(_dbContext.borrow.ToList());
        }

        // GET: api/User/1
        [HttpGet("{id}")]
        public IActionResult GetBorrowDetails(int id)
        {
            var borrowInfo = _dbContext.borrow.FirstOrDefault(b => b.BorrowID == id);
            if (borrowInfo == null)
            {
                return NotFound();
            }
            return Ok(borrowInfo);
        }

        //Adding a new user
        // POST: api/User
        [HttpPost]
        public IActionResult PostBorrowDetails([FromBody] BorrowDetails borrowInfo)
        {
            _dbContext.borrow.Add(borrowInfo);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing user
        // PUT: api/user/1
        [HttpPut("{id}")]
        public IActionResult PutBorrowDetails(int id, [FromBody] BorrowDetails borrowInfo)
        {
            var borrowInfoOld = _dbContext.borrow.FirstOrDefault(b => b.BorrowID == id);
            if (borrowInfoOld == null)
            {
                return NotFound();
            }
            borrowInfoOld.BorrowID = borrowInfo.BorrowID;
            borrowInfoOld.BookID = borrowInfo. BookID;
            borrowInfoOld.BorrowBookCount = borrowInfo.BorrowBookCount;
            borrowInfoOld.UserID = borrowInfo.UserID;
            borrowInfoOld. BorrowedDate = borrowInfo.BorrowedDate;
            borrowInfoOld.Status=borrowInfo.Status;
            borrowInfoOld.PaidFineAmount=borrowInfo.PaidFineAmount;
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        //delete
        [HttpDelete("{id}")]
        public IActionResult DeleteBorrowDetails(int id)
        {
            var borrowInfo = _dbContext.borrow.FirstOrDefault(b=> b.BorrowID == id);
            if (borrowInfo == null)
            {
                return NotFound();
            }
            _dbContext.borrow.Remove(borrowInfo);
            _dbContext.SaveChanges();
            return Ok();
        }  
    }
}