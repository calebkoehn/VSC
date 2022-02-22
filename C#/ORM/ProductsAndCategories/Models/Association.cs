using System;
using System.ComponentModel.DataAnnotations;

namespace ProductsAndCategories.Models

{

    public class Assocation 
    {
        [Key]
        public int AssocationId {get;set;}
        public int CategoryId {get;set;}
        public int ProductId {get;set;}
        public Category Category {get;set;}
        public Product Product {get;set;}
    }
}