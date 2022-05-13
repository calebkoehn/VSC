using System;

using System.ComponentModel.DataAnnotations;

namespace BeltExam.Models

{
    public class Association
    {
        [Key]
        public int AssociationId {get;set;}
        public int UserId {get;set;}
        public User User {get;set;}
        public int DojoActivityId {get;set;}
        public DojoActivity DojoActivity {get;set;}
        
    }
}