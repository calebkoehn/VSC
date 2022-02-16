using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using CRUDelicious.Models;
using Microsoft.EntityFrameworkCore;

namespace CRUDelicious.Controllers
{
    public class HomeController : Controller
    {
        private MyContext _context;
        public HomeController(MyContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            List<Dish> allDishes = _context.Dishes.ToList();
            ViewBag.allDishes = allDishes;
            return View();
        }
        [HttpGet("New")]
        public IActionResult New(Dish newDish)
        {
            
            return View("New");
            
        }
        [HttpPost("process")]
        public IActionResult Process(Dish newDish)
        {
            if(ModelState.IsValid)
            {
                Console.WriteLine("Added Dish");
                _context.Add(newDish);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }else {
                return View("New");
            }
        }

        [HttpGet("delete/{dshid}")]
        public IActionResult deleteOne(int dshid)
        {
            Dish dshToDelete = _context.Dishes.SingleOrDefault(a => a.DishId == dshid);
            _context.Dishes.Remove(dshToDelete);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpGet("edit/{dshid}")]
        public IActionResult editOne(int dshid)
        {
            Dish dshToEdit = _context.Dishes.FirstOrDefault(a => a.DishId == dshid);
            return View(dshToEdit);
        }
        [HttpGet("view/{dshid}")]
        public IActionResult ViewOne(int dshid)
        {
            Dish dshToView = _context.Dishes.FirstOrDefault(a => a.DishId == dshid);
            return View("ViewOne",dshToView);
            
        }
        [HttpPost("update/{dshid}")]
        public IActionResult updateOne(int dshid, Dish editedDish)
        {
            Dish orginal = _context.Dishes.FirstOrDefault(a => a.DishId == dshid);
            orginal.Name = editedDish.Name;
            orginal.Chef = editedDish.Chef;
            orginal.Tastiness = editedDish.Tastiness;
            orginal.Calories = editedDish.Calories;
            orginal.Description = editedDish.Description;
            orginal.UpdatedAt = DateTime.Now;
            _context.SaveChanges();
            return RedirectToAction("Index");
        }



        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
