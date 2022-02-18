using Microsoft.EntityFrameworkCore;
namespace Demo.Models
{ 
    // the MyContext class representing a session with our MySQL 
    // database allowing us to query for or save data
    public class MyContext : DbContext 
    { 
        public MyContext(DbContextOptions options) : base(options) { }
        // the "Monsters" table name will come from the DbSet variable name
        public DbSet<Person> People { get; set; }
        public DbSet<Creature> Creatures { get; set; }
    }
}