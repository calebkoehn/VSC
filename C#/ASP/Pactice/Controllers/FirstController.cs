using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Pactice

{
    public class FirstController : Controller 
    {
        public static List<string> NameSuggestions = new List<string>();


        [HttpGet]

        [Route("")]
        public ViewResult Index()
        {
            ViewBag.heffamoose = "This is the ViewBag.";
            ViewBag.suggestions = NameSuggestions;
            return View("Index");
        }

        [HttpPost("firstpost")]
        public IActionResult Firstpost(string names)
        {
            NameSuggestions.Add(names);
            return RedirectToAction("Index");
        }

        [HttpGet("second")]
        public RedirectToActionResult Second()
        {
            return RedirectToAction("Index");
        }
        [HttpGet("third/{whateverIWant}")]
        public IActionResult Third(string whateverIWant)
        
        {
            if(whateverIWant == "apple")
            {
                return View("Third");
            }else {
                return RedirectToAction("Index");
            }
        }
    }
}