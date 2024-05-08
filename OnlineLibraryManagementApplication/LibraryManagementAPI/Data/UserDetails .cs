using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryManagementAPI.Data
{
    [Table("UserDetails", Schema = "public")]
    public class UserDetails
    {
        //         a.	UserID (Auto Increment – SF3000)
        // b.	UserName
        // c.	Gender
        // d.	Department – (Enum – ECE, EEE, CSE)
        // e.	MobileNumber
        // f.	MailID
        //g.	WalletBalance
        [Key]
        public int UserID { get; set; }
        public string UserName { get; set; }
        public string Gender { get; set; }
        public string Department { get; set; }
        public string MobileNumber { get; set; }
        public string MailID { get; set; }
        public int WalletBalance { get; set; }
        
        



    }
}