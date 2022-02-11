using System.ComponentModel.DataAnnotations;

namespace DojoSurvey.Models 

{

    public class Survey
    {
        [Required]
        [MinLength(2, ErrorMessage = "Name must be longer than 2 characters!")]
        public string name {get;set;}
        
        [Required]
        public string dojolocation {get;set;}
        
        [Required]
        public string language {get;set;}

        [MaxLength(20, ErrorMessage ="Comment can't be longer than 20 characters!")]
        public string text {get;set;}

    }

}