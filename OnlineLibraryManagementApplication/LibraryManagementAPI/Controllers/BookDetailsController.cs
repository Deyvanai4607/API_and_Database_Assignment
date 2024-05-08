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
    public class BookDetailsController: ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public BookDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/User
        [HttpGet]
        public IActionResult GetBookDetails()
        {
            return Ok(_dbContext.book.ToList());
        }

        // GET: api/User/1
        [HttpGet("{id}")]
        public IActionResult GetBookDetails(int id)
        {
            var bookInfo = _dbContext.book.FirstOrDefault(b => b.BookID == id);
            if (bookInfo == null)
            {
                return NotFound();
            }
            return Ok(bookInfo);
        }

        //Adding a new user
        // POST: api/User
        [HttpPost]
        public IActionResult PostBookDetails([FromBody] BookDetails bookInfo)
        {
            _dbContext.book.Add(bookInfo);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing user
        // PUT: api/user/1
        [HttpPut("{id}")]
        public IActionResult PutBookDetails(int id, [FromBody] BookDetails bookInfo)
        {
            var bookInfoOld = _dbContext.book.FirstOrDefault(b => b.BookID == id);
            if (bookInfoOld == null)
            {
                return NotFound();
            }
            bookInfoOld.BookID = bookInfo.BookID;
            bookInfoOld.BookCount = bookInfo. BookCount;
            bookInfoOld.BookName = bookInfo.BookName;
            bookInfoOld.AuthorName = bookInfo.AuthorName;
             
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        //delete
        [HttpDelete("{id}")]
        public IActionResult DeleteBookDetails(int id)
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