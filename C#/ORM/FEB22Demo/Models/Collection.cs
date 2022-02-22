using System;
using System.ComponentModel.DataAnnotations;

namespace FEB22Demo.Models

{

    public class Collection 
    {
        [Key]
        public int CollectionId {get;set;}
        public int CollectorId {get;set;}
        public int RecordId {get;set;}
        public Collector Owner {get;set;}
        public Record Record {get;set;}
    }
}