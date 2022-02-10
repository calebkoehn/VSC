using Microsoft.AspNetCore.Mvc;
namespace Portfolio1     //be sure to use your own project's namespace!
{
    public class FirstController : Controller   //remember inheritance??
    {
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public string Index()
        {
            return "This is my index!";
        }
        [HttpGet]
        [Route("project")]
        public string Project()
        {
            return $"These are my projects!";
        }
        [HttpGet]
        [Route("contact")]
        public string Contact()
        {
            return $"This is my contact!";
        }
    }
}