using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ViewModel.Models;

namespace ViewModel.Controllers
{
    public class HomeController : Controller
    {
        public List<User> CreateUsers()
        {
            return new List<User>()
            {
                new User(){ FirstName="Sally", LastName="Smith"},
                new User(){ FirstName="Billy", LastName="Joel"},
                new User(){ FirstName="Joey", LastName="Harrigan"},
                new User(){ FirstName="Moose", LastName="Jaw"},
            };
        }
        [HttpGet("")]
        public IActionResult Index()
        {
            string stringModel = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer commodo eros ut pellentesque feugiat. Quisque in quam at velit rhoncus tristique. Pellentesque iaculis arcu in libero consequat, eu vehicula sapien vulputate. Pellentesque sit amet enim leo. Morbi rutrum, metus id dictum sollicitudin, erat turpis fermentum augue, ut aliquam nulla nisl vitae eros. Aliquam erat volutpat. Curabitur risus justo, congue id leo at, pharetra fringilla quam. Ut ac felis quam. Curabitur nec felis bibendum, elementum elit eu, venenatis est. In est ex, sodales at convallis et, porttitor sit amet justo. Nulla facilisi. Vivamus fringilla odio vitae pellentesque venenatis. Quisque tortor ante, varius et enim ac, condimentum porta ex.";
            return View("Index", stringModel);
        }

        [HttpGet("users")]
        public IActionResult AllUsers()
        {
            var users = CreateUsers();
            return View(users);
        }

        [HttpGet("numbers")]
        public IActionResult Numbers()
        {
            int[] numbers = new int[]{4,19,65,75,22,15};
            return View(numbers);
        }

        [HttpGet("user")]
        public IActionResult SingleUser()
        {
            var rand = new Random();
            var users = CreateUsers();

            var user = users[rand.Next(users.Count)];
            return View(user);
        }
        
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }


        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
