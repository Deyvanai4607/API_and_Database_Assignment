using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicalShopAPI.Data;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Mvc;
using RouteAttribute = Microsoft.AspNetCore.Mvc.RouteAttribute;

namespace MedicalShopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public OrderController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        //get: api /order
        [HttpGet]
        public IActionResult GetOrder()
        {
            return Ok(_dbContext.orders.ToList());
        }

        // GET: api/order/1
        [HttpGet("{id}")]
        public IActionResult GetOrder(int id)
        {
            var order = _dbContext.orders.FirstOrDefault(o => o.OrderId == id);
            if (order == null)
            {
                return NotFound();
            }
            return Ok(order);
        }

        //Adding a new order
        // POST: api/order
        [HttpPost]
        public IActionResult PostOrder([FromBody] Order order)
        {
            _dbContext.orders.Add(order);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing order
        // PUT: api/order/1
        [HttpPut("{id}")]
        public IActionResult PutMedicine(int id, [FromBody] Order order)
        {
            var orderOld = _dbContext.orders.FirstOrDefault(o => o.OrderId == id);
            if (orderOld==null)
            {
                return NotFound();
            }
            orderOld.MedicineCount=order.MedicineCount;
            orderOld.MedicineID=order.MedicineID;
            orderOld.MedicineName=order.MedicineName;
            orderOld.OrderStatus=order.OrderStatus;
            orderOld.UserID=order.UserID;
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }



        //delete
        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            var order = _dbContext.orders.FirstOrDefault(o => o.OrderId == id);
            if (order == null)
            {
                return NotFound();
            }
             _dbContext.orders.Remove(order);
            _dbContext.SaveChanges();
            return Ok();
        }

    }
}