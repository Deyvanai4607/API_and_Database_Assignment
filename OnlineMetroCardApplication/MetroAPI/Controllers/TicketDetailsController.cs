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
    public class TicketDetailsController:ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public TicketDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/User
        [HttpGet]
        public IActionResult GetTicketDetails()
        {
            return Ok(_dbContext.ticket.ToList());
        }

        // GET: api/User/1
        [HttpGet("{id}")]
        public IActionResult GetTicketDetails(int id)
        {
            var ticketDetail = _dbContext.ticket.FirstOrDefault(t => t.TicketID == id);
            if (ticketDetail == null)
            {
                return NotFound();
            }
            return Ok(ticketDetail);
        }

        //Adding a new user
        // POST: api/User
        [HttpPost]
        public IActionResult PostTicketDetails([FromBody] TicketDetails ticketDetail)
        {
            _dbContext.ticket.Add(ticketDetail);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing user
        // PUT: api/user/1
        [HttpPut("{id}")]
        public IActionResult PutTicketDetails(int id, [FromBody] TicketDetails ticketDetail)
        {
            var ticketDetailOld = _dbContext.ticket.FirstOrDefault(t => t.TicketID == id);
            if (ticketDetailOld == null)
            {
                return NotFound();
            }
            ticketDetailOld.TicketID = ticketDetail.TicketID;
            ticketDetailOld.FromLocation = ticketDetail.FromLocation;
            ticketDetailOld.ToLocation = ticketDetail.ToLocation;
            ticketDetailOld.Fair = ticketDetail.Fair;
            
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        //delete
        [HttpDelete("{id}")]
        public IActionResult DeleteTicketDetails(int id)
        {
            var travelDetail = _dbContext.travel.FirstOrDefault(t => t.TravelID == id);
            if (travelDetail == null)
            {
                return NotFound();
            }
            _dbContext.travel.Remove(travelDetail);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}