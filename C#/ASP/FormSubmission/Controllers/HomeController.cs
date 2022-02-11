using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FormSubmission.Models;

namespace FormSubmission.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public static List<User> UserResults = new List<User>();
        //for each route this controller is to handle:
        [HttpGet]       //type of request
        [Route("")]     //associated route string (exclude the leading /)

        [HttpPost("addUser")]
        public IActionResult addUser(User newUser)
        {
            if(ModelState.IsValid)
            {
                UserResults.Add(newUser);
                return RedirectToAction("Result");
            } else {
                ViewBag.UserResults = UserResults;
                return View("Index");
            }
        }

        [HttpGet]       //type of request
        [Route("Result")]     //associated route string (exclude the leading /)
        public IActionResult Result()
        {
            ViewBag.UserResults = UserResults;
            return View("Result");
        }


        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
