using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
namespace DojoSurvey.Controllers     //be sure to use your own project's namespace!
{
    public class FirstController : Controller   //remember inheritance??
    {
        public static List<string> SurveyResults = new List<string>();
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public ViewResult Index()
        {
            return View("Index");
        }
        [HttpPost("firstpost")]
        public IActionResult Firstpost(string results)
        {
            SurveyResults.Add(results);
            return RedirectToAction("Result");
        }
        [HttpGet]       //type of request
        [Route("Result")]     //associated route string (exclude the leading /)
        public ViewResult Result()
        {
            ViewBag.results = SurveyResults;
            return View("Result");
        }
    }
}
