using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using RandomPasscode.Models;
using Microsoft.AspNetCore.Http;

namespace RandomPasscode.Controllers
{
    public class HomeController : Controller

    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            if(HttpContext.Session.GetString("CreateRandomPassword") == null)
            {
                HttpContext.Session.SetInt32("Count", 0);
            }
            ViewBag.Count = HttpContext.Session.GetInt32("Count");
            ViewBag.CreateRandomPassword = HttpContext.Session.GetString("CreateRandomPassword");
            return View();
        }

        [HttpGet("generate")]
        // Default size of random password is 14  

        public IActionResult CreateRandomPassword()
        {
            string validChars = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?_-";
            Random random = new Random();

            int size = 14;

            // Select one random character at a time from the string  
            // and create an array of chars  
            char[] chars = new char[size];
            for (int i = 0; i < size; i++)
            {
                chars[i] = validChars[random.Next(0, validChars.Length)];
            }
            string results = new string(chars);
            Console.WriteLine(results);
            HttpContext.Session.SetString("CreateRandomPassword", results);
            int? amount = HttpContext.Session.GetInt32("Count");
            Console.WriteLine(amount);
            HttpContext.Session.SetInt32("Count", (int)++amount);
            // return new string(chars);
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
