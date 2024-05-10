using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryShopAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace GroceryShopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GroceryDetailsController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public GroceryDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/GroceryDetails
        [HttpGet]
        public IActionResult GetGroceryDetails()
        {
            return Ok(_dbContext.groceries.ToList());
        }

        // GET: api/GroceryDetails/1
        [HttpGet("{id}")]
        public IActionResult GetGroceryDetails(int id)
        {
            var groceryInfo = _dbContext.groceries.FirstOrDefault(g => g.GroceryID == id);
            if (groceryInfo == null)
            {
                return NotFound();
            }
            return Ok(groceryInfo);
        }

        //Adding a new grocery
        // POST: api/GroceryDetails
        [HttpPost]
        public IActionResult PostGroceryDetails([FromBody] GroceryDetails groceryInfo)
        {
            _dbContext.groceries.Add(groceryInfo);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing GroceryDetails
        // PUT: api/GroceryDetails/1
        [HttpPut("{id}")]
        public IActionResult PutGroceryDetails(int id, [FromBody] GroceryDetails groceryInfo)
        {
            var groceryInfoOld = _dbContext.groceries.FirstOrDefault(g => g.GroceryID == id);
            if (groceryInfoOld == null)
            {
                return NotFound();
            }

            groceryInfoOld.GroceryID = groceryInfo.GroceryID;
            groceryInfoOld.GroceryName = groceryInfo.GroceryName;
            groceryInfoOld.GroceryQuantity = groceryInfo.GroceryQuantity;
            groceryInfoOld.UnitPrice = groceryInfo.UnitPrice;
            groceryInfoOld.PurchaseDate = groceryInfo.PurchaseDate;
            groceryInfoOld.ExpiryDate = groceryInfo.ExpiryDate;
            groceryInfoOld.GroceryImage = groceryInfo.GroceryImage;
            
            
            _dbContext.SaveChanges();
            return Ok();
        }

        //delete
        [HttpDelete("{id}")]
        public IActionResult DeleteGroceryDetails(int id)
        {
            var groceryInfo = _dbContext.groceries.FirstOrDefault(g => g.GroceryID == id);
            if (groceryInfo == null)
            {
                return NotFound();
            }
            _dbContext.groceries.Remove(groceryInfo);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}