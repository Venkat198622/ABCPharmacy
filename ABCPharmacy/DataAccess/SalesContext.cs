using ABCPharmacy.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ABCPharmacy.DataAccess
{
    public class SalesContext : DbContext
    {
        public SalesContext(DbContextOptions<SalesContext> options)
           : base(options)
        {
        }

        public DbSet<SalesModel> Sales { get; set; }
    }
}
