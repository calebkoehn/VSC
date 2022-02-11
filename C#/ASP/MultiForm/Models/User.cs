using System.ComponentModel.DataAnnotations;
namespace MultiForm.Models
{
    public class User
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public int Age { get; set; }
    }

}