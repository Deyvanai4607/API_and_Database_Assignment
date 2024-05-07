
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Linq;
using System.Threading.Tasks;
using MedicalShopAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace MedicalShopAPI.Controllers
{
    public class ApplicationDBContext:DbContext
    {
        public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }
        public DbSet<User> users {get;set;}
        public DbSet<MedicineInfo> medicines {get;set;}
        public DbSet<Order> orders {get;set;}
    }
}