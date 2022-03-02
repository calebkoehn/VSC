using System;
using System.ComponentModel.DataAnnotations;

namespace Project.Models

{
    public class Order
    {
        [Key]
        public int OrderId {get;set;}
        public int UserId {get;set;}
        public User User {get;set;}
        public int ProductId {get;set;}
        public Product Product {get;set;}
        [Range(1,100000000)]
        public int Quantity {get;set;}
    }
}