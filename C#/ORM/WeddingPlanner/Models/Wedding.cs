using System;
using System.ComponentModel.DataAnnotations;

namespace WeddingPlanner.Models

{
    public class Wedding
    {
        [Key]
        public int WeddingId {get;set;}
        public int UserId {get;set;}
        public User Guest {get;set;}
        public int PlanWeddingId {get;set;}
        public PlanWedding PlanWedding {get;set;}
    }
}