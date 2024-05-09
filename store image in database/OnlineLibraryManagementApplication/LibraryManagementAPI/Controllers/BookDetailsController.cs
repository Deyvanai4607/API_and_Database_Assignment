using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryManagementAPI.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookDetailsController : ControllerBase
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
            //var books = _dbContext.book.ToList();
            if (bookInfo == null)
            {
                return NotFound();
            }
            // else if(bookInfo != null){
            //     foreach (var book in books)
            //     {
            //         if (book.ImageData == null)
            //         {
            //             book.ImageData = new byte[] { }; // Convert null to an empty byte array
            //         }
            //     }
            //     return Ok(books);
            // }
            return Ok(bookInfo);

            

            // Check if ImageData is null and convert it to a nullable byte array
            

            
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
            bookInfoOld.BookCount = bookInfo.BookCount;
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
            var borrowInfo = _dbContext.borrow.FirstOrDefault(b => b.BorrowID == id);
            if (borrowInfo == null)
            {
                return NotFound();
            }
            _dbContext.borrow.Remove(borrowInfo);
            _dbContext.SaveChanges();
            return Ok();
        }


        // // POST: api/BookDetails/UploadImage
        // [HttpPost("UploadImage")]
        // public async Task<IActionResult> UploadImage([FromForm] IFormFile file, [FromForm] int bookId)
        // {
        //     if (file == null || file.Length == 0)
        //         return BadRequest("Invalid file");

        //     var book = await _dbContext.book.FirstOrDefaultAsync(b => b.BookID == bookId);
        //     if (book == null)
        //         return NotFound("Book not found");

        //     using (var memoryStream = new MemoryStream())
        //     {
        //         await file.CopyToAsync(memoryStream);
        //         book.ImageData = memoryStream.ToArray();
        //         await _dbContext.SaveChangesAsync();
        //     }

        //     return Ok("Image uploaded successfully");
        // }

        // //retrieve image
        // [HttpGet("GetImage/{bookId}")]
        // public async Task<IActionResult> GetImage(int bookId)
        // {
        //     var book = await _dbContext.book.FirstOrDefaultAsync(b => b.BookID == bookId);
        //     if (book == null || book.ImageData == null || book.ImageData.Length == 0)
        //         return NotFound("Image not found");

        //     // Create a memory stream from the byte array image data
        //     using (var memoryStream = new MemoryStream(book.ImageData))
        //     {
        //         // Determine the content type based on your image type (e.g., "image/jpeg", "image/png", etc.)
        //         var contentType = "image/jpeg"; // For example, assuming it's a JPEG image

        //         // Return the image data as a file response with the appropriate content type
        //         return File(memoryStream, contentType);
        //     }
        // }

        

    }
}