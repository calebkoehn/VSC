using System;
using System.ComponentModel.DataAnnotations;
using System.Collections.Generic;

namespace FEB22Demo.Models
{

    public class Record
    {
        [Key]
        public int RecordId {get;set;}
        [Required]
        public string Title {get;set;}
        [Required]
        public string Artist {get;set;}
        [Required]
        public string Genre {get;set;}
        [Required]
        public string AlbumArt {get;set;}
        [Required]
        public int RPM {get;set;}

        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAt {get;set;} = DateTime.Now;
        public List<Collection> CollectedBy {get;set;}
    }
}