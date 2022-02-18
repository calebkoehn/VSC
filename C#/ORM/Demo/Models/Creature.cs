using System;
using System.ComponentModel.DataAnnotations;

namespace Demo.Models
{
    public class Creature 
    {
        [Key]
        public int CreatureId {get;set;}
        [Required]
        public string Name {get;set;}
        [Required]
        public string Species {get;set;}
        [Required]
        public string Picture {get;set;}
        [Required]
        public int Age {get;set;}
        public int PersonId {get;set;}
        public Person Owner {get;set;}

        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}