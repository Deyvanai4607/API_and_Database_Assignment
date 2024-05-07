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
    public class TravelDetailsController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public TravelDetailsController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }

        // GET: api/User
        [HttpGet]
        public IActionResult GetTravelDetails()
        {
            return Ok(_dbContext.travel.ToList());
        }

        // GET: api/User/1
        [HttpGet("{id}")]
        public IActionResult GetTravelDetails(int id)
        {
            var travelDetail = _dbContext.travel.FirstOrDefault(t => t.TravelID == id);
            if (travelDetail == null)
            {
                return NotFound();
            }
            return Ok(travelDetail);
        }

        //Adding a new user
        // POST: api/User
        [HttpPost]
        public IActionResult PostTravelDetails([FromBody] TravelDetails travelDetail)
        {
            _dbContext.travel.Add(travelDetail);
            _dbContext.SaveChanges();
            return Ok();
        }

        // Updating an existing user
        // PUT: api/user/1
        [HttpPut("{id}")]
        public IActionResult PutTravelDetails(int id, [FromBody] TravelDetails travelDetail)
        {
            var travelDetailOld = _dbContext.travel.FirstOrDefault(t => t.TravelID == id);
            if (travelDetailOld == null)
            {
                return NotFound();
            }
            travelDetailOld.TravelID = travelDetail.TravelID;
            travelDetailOld.FromLocation = travelDetail.FromLocation;
            travelDetailOld.ToLocation = travelDetail.ToLocation;
            travelDetailOld.TravelDate = travelDetail.TravelDate;
            travelDetailOld.TravelCost = travelDetail.TravelCost;
            travelDetailOld.CardNumber=travelDetail.CardNumber;
            _dbContext.SaveChanges();
            // You might want to return NoContent or another appropriate response
            return Ok();
        }

        //delete
        [HttpDelete("{id}")]
        public IActionResult DeleteTravelDetails(int id)
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