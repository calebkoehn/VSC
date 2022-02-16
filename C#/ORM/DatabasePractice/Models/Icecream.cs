using System;
using System.ComponentModel.DataAnnotations;

namespace DatabasePractice.Models

{
    public class Icecream
    {
        [Key]

        public int IcecreamId {get;set;}

        [Required]
        public string Flavor {get;set;}

        [Required]
        public string Topping {get;set;}

        [Required]
        public bool hasCherry {get;set;}

        [Required]
        public string Container {get;set;}
        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}