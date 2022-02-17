using System;
using System.ComponentModel.DataAnnotations;

namespace LoginRegistration.Models

{

    public class LoginUser
    {
        [Required]
        [EmailAddress]
        public string LEmail {get;set;}

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string LPassword {get;set;}
    }
}