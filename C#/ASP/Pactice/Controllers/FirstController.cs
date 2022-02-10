using Microsoft.AspNetCore.Mvc;

namespace Pactice

{
    public class FirstController : Controller 
    {


        [HttpGet]

        [Route("")]
        public ViewResult Index()
        {
            return View("Index");
        }

        [HttpGet("second")]
        public string Second()
        {
            return "Hello from the second page";
        }
        [HttpGet("third/{param}")]
        public string Third(string param)
        {
            return $"The thing you wrote is: {param}";
        }
    }
}