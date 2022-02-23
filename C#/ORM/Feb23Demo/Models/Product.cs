using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace Feb23Demo.Models
{

    public class Product
    {
        [Key]
        public int ProductId {get;set;}
        [Required]
        public string ProductName {get;set;}
        [Required]
        public string Picture {get;set;}
        [Required]
        [Range(0.01,1000000000000.00)]
        public double Price {get;set;}
        [Required]
        public int Quantity {get;set;}

        public int UserId {get;set;}
        public User Seller {get;set;}
        public List<Order> OrderedBy {get;set;}

        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}