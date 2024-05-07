using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MedicalShopAPI.Data;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
namespace MedicalShopAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicineInfoController : ControllerBase
    {

        private readonly ApplicationDBContext _dbContext;
        public MedicineInfoController(ApplicationDBContext applicationDBContext)
        {
            _dbContext = applicationDBContext;
        }
        // GET: api/User
        [HttpGet]
        public IActionResult GetMedicineInfo()
        {
            return Ok(_dbContext.medicines.ToList());
        }

        // GET: api/User/1
        // [HttpGet("{id}")]
        // public IActionResult GetMedicineInfo(int id)
        // {
        //     var medicine = _dbContext.medicines.FirstOrDefault(m => m.MedicineID == id);
        //     if (medicine == null)
        //     {
        //         return NotFound();
        //     }

        //     return Ok(medicine);
        // }

        //Set Details
        [HttpGet("{MedicineID}")]
        public IActionResult GetIndividualMedicineDetails(int medicineID)
        {
            var medicine = _dbContext.medicines.FirstOrDefault(medicine => medicine.MedicineID == medicineID);
            if (medicine == null)
            {
                return NotFound();
            }
            return Ok(medicine);
        }

        //Add Details
        [HttpPost]
        public IActionResult AddMedicineDetails([FromBody] MedicineInfo medicine)
        {
            _dbContext.medicines.Add(medicine);
            _dbContext.SaveChanges();
            return Ok();
        }


        // PUT: api/order/1

        //Update Details
        [HttpPut("{id}")]
        public IActionResult UpdateMedicineDetails(int id, [FromBody] MedicineInfo medicine)
        {
            var medicineOld = _dbContext.medicines.FirstOrDefault(m => m.MedicineID == id);
            if (medicineOld == null)
            {
                return NotFound();
            }
            medicineOld.MedicineCount = medicine.MedicineCount;
            medicineOld.ExpiryDate = medicine.ExpiryDate;
            medicineOld.MedicineName = medicine.MedicineName;
            medicineOld.MedicinePrice = medicine.MedicinePrice;
            _dbContext.SaveChanges();
            return Ok();
        }

        [HttpDelete("{MedicineID}")]
        public IActionResult DeleteMedicine(int medicineID)
        {
            var medicine = _dbContext.medicines.FirstOrDefault(medicine => medicine.MedicineID == medicineID);
            if (medicine == null)
            {
                return NotFound();
            }
            _dbContext.medicines.Remove(medicine);
            _dbContext.SaveChanges();
            return Ok();
        }
    }
}