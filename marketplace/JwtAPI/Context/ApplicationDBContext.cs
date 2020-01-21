using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JwtAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace JwtAPI.Context
{
    public class ApplicationDBContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Filename=MyDatabase.db");
        }

        public DbSet<Login> Logins { get; set; }
    }
}
