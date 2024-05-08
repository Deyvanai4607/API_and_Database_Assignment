using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace LibraryManagementAPI.Data
{
    [Table("BorrowDetails", Schema = "public")]
    public class BorrowDetails
    {
        //         •	BorrowID (Auto Increment – LB2000)
        // •	BookID 
        // •	UserID
        // •	BorrowedDate – ( Current Date and Time )
        // •	BorrowBookCount 
        // •	Status –  ( Enum - Default, Borrowed, Returned )
        // •	PaidFineAmount
        [Key]
        public int BorrowID { get; set; }
        public int BookID { get; set; }
        public int UserID { get; set; }
        public DateTime BorrowedDate { get; set; }
        public int BorrowBookCount { get; set; }
        public string Status { get; set; }
        public int PaidFineAmount { get; set; }

        
        

    }
}