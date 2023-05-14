using System.ComponentModel;
using API.Entities;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        //AppUser comes from API.Entities
        public DbSet<AppUser> Users { get; set; }
    }
}