using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.Generic;

namespace WeddingPlanner.Models
{
    public class PlanWedding
    {
        [Key]
        public int PlanWeddingId {get;set;}
        [Required]
        public string WedderOne {get;set;}
        [Required]
        public string WedderTwo {get;set;}

        [Required]
        [DataType(DataType.Date)]
        public DateTime Date {get;set;}

        [Required]
        public string Address {get;set;}

        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        public List<Wedding> GuestList {get;set;}
        public int UserId {get;set;}
        public User Planner {get;set;}
    }
}