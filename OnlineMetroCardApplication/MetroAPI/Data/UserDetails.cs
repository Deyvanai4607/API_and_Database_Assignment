using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MetroAPI.Data
{
    [Table("UserDetails", Schema = "public")]
    public class UserDetails
    {
        [Key]
        public int UserID { get; set; }
        public int CardNumber { get; set; }
        public string UserName { get; set; }
        public string UserPhoneNumber { get; set; }
        public int Balance { get; set; }
  
    }
}