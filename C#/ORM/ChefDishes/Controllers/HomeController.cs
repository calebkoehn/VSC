using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ChefDishes.Models;
using Microsoft.EntityFrameworkCore;

namespace ChefDishes.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;
        // here we can "inject" our context service into the constructor
        public HomeController(MyContext context)
        {
            _context = context;
        }
        public IActionResult Index()
        {
            ViewBag.allChefs = _context.Chefs.Include(c => c.Dishes).ToList();
            return View();
        }
        
        [HttpGet("New")]
        public IActionResult New()
        {
            return View();
        }

        [HttpPost("addChef")]
        public IActionResult addChef(Chef newChef)
        {
            if(ModelState.IsValid)
            {
                _context.Chefs.Add(newChef);
                _context.SaveChanges();
                return RedirectToAction("Index");
            } else {
                return View("New");
            }
        }
        [HttpGet("Dishes")]
        public IActionResult Dishes()
        {
            ViewBag.allDishes = _context.Dishes.Include(d => d.Creator).ToList();
            return View();
        }

        [HttpGet("newDish")]
        public IActionResult newDish()
        {
            ViewBag.allChefs = _context.Chefs.ToList();
            return View();
        }

        [HttpPost("addDish")]
        public IActionResult addDish(Dish newDish)
        {
            if(ModelState.IsValid)
            {
                _context.Dishes.Add(newDish);
                _context.SaveChanges();
                return RedirectToAction("Dishes");
            } else {
                return View("NewDish");
            }
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
