using Microsoft.EntityFrameworkCore;
namespace FEB22Demo.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class MyContext : DbContext 
    { 
        public MyContext(DbContextOptions options) : base(options) { }

        public DbSet<Collector> Collectors { get; set; }
        public DbSet<Record> Records { get; set; }
        public DbSet<Collection> Collections { get; set; }
    }
}