using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LoginRegistration.Models

{

    public class User{
        [Key]
        public int UserId{get;set;}
        
        [Required]
        public string FirstName {get;set;}

        [Required]
        public string LastName {get;set;}

        [Required]
        [EmailAddress]
        public string Email {get;set;}

        [Required]
        [MinLength(8)]
        [DataType(DataType.Password)]
        public string Password {get;set;}

        public DateTime CreatedAt {get;set;} = DateTime.Now;
        public DateTime UpdatedAT {get;set;} = DateTime.Now;

        [NotMapped]
        [Compare("Password")]
        [DataType(DataType.Password)]
        public string ConfirmPass {get;set;}
    }
}