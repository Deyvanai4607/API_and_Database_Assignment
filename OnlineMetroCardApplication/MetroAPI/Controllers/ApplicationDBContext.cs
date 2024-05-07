using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MetroAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace MetroAPI.Controllers
{
    public class ApplicationDBContext:DbContext,IDisposable
    {
         public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        public DbSet<UserDetails> users {get;set;}
        public DbSet<TravelDetails> travel {get;set;}
        public DbSet<TicketDetails> ticket {get;set;}
    }
}