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
    public class OrderDetailsController: ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public OrderDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/OrderDetails
        [HttpGet]
        public IActionResult GetOrderDetails()
        {
            return Ok(_dbContext.orders.ToList());
        }

        // GET: api/OrderDetails/1
        [HttpGet("{id}")]
        public IActionResult GetOrderDetails(int id)
        {
            var OrderInfo= _dbContext.orders.FirstOrDefault(o => o.OrderID == id);
            if (OrderInfo == null)
            {
                return NotFound();
            }
            return Ok(OrderInfo);
        }

        //Adding a new order
        // POST: api/OrderDetails
        [HttpPost]
        public IActionResult PostOrderDetails([FromBody] OrderDetails OrderInfo)
        {
            _dbContext.orders.Add(OrderInfo);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing OrderDetails
        // PUT: api/OrderDetails/1
        [HttpPut("{id}")]
        public IActionResult PutOrderDetails(int id, [FromBody] OrderDetails orderInfo)
        {
            var orderInfoOld = _dbContext.orders.FirstOrDefault(o => o.OrderID == id);
            if (orderInfoOld == null)
            {
                return NotFound();
            }

            orderInfoOld.OrderID = orderInfo.OrderID;
            orderInfoOld.UserID = orderInfo. UserID;
            orderInfoOld.ProductID = orderInfo.ProductID;
            orderInfoOld.UserID = orderInfo.UserID;
            orderInfoOld. ProductName = orderInfo.ProductName;
            orderInfoOld.ProductPrice=orderInfo.ProductPrice;
            orderInfoOld.PurchaseDate=orderInfo.PurchaseDate;
            orderInfoOld.Quantity=orderInfo.Quantity;
            orderInfoOld.TotalAmount=orderInfo.TotalAmount;
            _dbContext.SaveChanges();
            return Ok();
        }

         //delete
        [HttpDelete("{id}")]
        public IActionResult DeleteOrderDetails(int id)
        {
            var orderInfo = _dbContext.orders.FirstOrDefault(o=> o.OrderID == id);
            if (orderInfo == null)
            {
                return NotFound();
            }
            _dbContext.orders.Remove(orderInfo);
            _dbContext.SaveChanges();
            return Ok();
        }  
    }
}