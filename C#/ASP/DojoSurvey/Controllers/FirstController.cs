using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using DojoSurvey.Models;
namespace DojoSurvey.Controllers     //be sure to use your own project's namespace!
{
    public class FirstController : Controller   //remember inheritance??
    {
        public static List<Survey> SurveyResults = new List<Survey>();
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)
        public ViewResult Index()
        {
            return View("Index");
        }
        //[HttpPost("firstpost")]
        // public IActionResult firstpost(string name,string dojolocation, string language, string text)
        // {
        //     SurveyResults.Add(name);
        //     SurveyResults.Add(dojolocation);
        //     SurveyResults.Add(language);
        //     SurveyResults.Add(text);
        //     return RedirectToAction("Result");
        // }

        [HttpPost("addSurvey")]
        public IActionResult addSurvey(Survey newSurvey)
        {
            SurveyResults.Add(newSurvey);
            return RedirectToAction("Result");
        }

        [HttpGet]       //type of request
        [Route("Result")]     //associated route string (exclude the leading /)
        public IActionResult Result()
        {
            ViewBag.SurveyResults = SurveyResults;
            return View("Result");
        }
    }
}
