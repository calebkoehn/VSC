using System;
using System.ComponentModel.DataAnnotations;

namespace Feb23Demo.Models
{
    public class LogUser
    {
        [Required]
        public string LogEmail {get;set;}
        [Required]
        [DataType(DataType.Password)]
        public string LogPassword {get;set;}
    }
}