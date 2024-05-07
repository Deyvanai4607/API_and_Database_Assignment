using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MedicalShopAPI.Data
{
    [Table("UserInfo", Schema = "public")]
    public class User
    {
        [Key]
        public int UserID { get; set; }
        public string UserEmail { get; set; }
        public string Password { get; set; }
        public string CPassword { get; set; }
        public string UserPhoneNumber { get; set; }
        public double Balance { get; set; }




    }
}