using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GroceryShopAPI.Data
{
    [Table("GroceryDetails", Schema = "public")]
    public class GroceryDetails
    {
        [Key]
        public int GroceryID { get; set; }
        public string GroceryName { get; set; }
        public int GroceryQuantity { get; set; }
        public int UnitPrice { get; set; }
        public DateTime PurchaseDate { get; set; }
        public DateTime ExpiryDate { get; set; }
        public string[] GroceryImage { get; set; }

        
        
    }
}