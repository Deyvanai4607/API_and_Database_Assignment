using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using LibraryManagementAPI.Data;
using Microsoft.EntityFrameworkCore;

namespace LibraryManagementAPI.Controllers
{
    public class ApplicationDBContext:DbContext,IDisposable
    {
         public ApplicationDBContext(DbContextOptions<ApplicationDBContext> options) : base(options)
        {
            AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);
        }

        public DbSet<UserDetails> users {get;set;}
        public DbSet<BookDetails> book {get;set;}
        public DbSet<BorrowDetails> borrow {get;set;}
    }
}