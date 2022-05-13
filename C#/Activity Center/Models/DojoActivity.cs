using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace BeltExam.Models
{

    public class DojoActivity
    {
        [Key]
        public int DojoActivityId {get;set;}
        [Required]
        public string Title {get;set;}
        [Required]
        [DataType(DataType.Date)]
        public DateTime Date {get;set;}
        [Required]
        [DataType(DataType.Time)]
        public DateTime Time {get;set;}
        [Required]
        public int Duration {get;set;}
        [Required]
        public string DurationAmount {get;set;}

        [Required]
        public string Description {get;set;}
        public int UserId {get;set;}
        public User Organizer {get;set;}
        public List<Association> DojoEventList {get;set;}

        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
    }
}