using System.ComponentModel.DataAnnotations;

namespace FormSubmission.Models 

{

    public class User
    {
        [Required]
        [MinLength(3, ErrorMessage = "First Name must be longer than 3 characters!")]
        public string FirstName {get;set;}
        
        [Required]
        [MinLength(3, ErrorMessage = "Last Name must be longer than 3 characters!")]
        public string LastName {get;set;}
        
        [Required]
        public int Age {get; set;}

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [MinLength(8, ErrorMessage ="Password must be ast least 8 characters long!")]
        public string Password { get; set; }

    }

}