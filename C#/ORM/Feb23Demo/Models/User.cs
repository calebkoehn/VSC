using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace Feb23Demo.Models
{
    public class User
    {
        [Key]
        public int UserId {get;set;}
        [Required]
        public string Name {get;set;}
        [Required]
        public string Location {get;set;}

        [Required]
        [EmailAddress]
        public string Email {get;set;}

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password {get;set;}

        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        public List<Product> Inventory {get;set;}
        public List<Order> MyOrders {get;set;}

        [NotMapped]
        [DataType(DataType.Password)]
        public string PassConfim {get;set;}
    }
}