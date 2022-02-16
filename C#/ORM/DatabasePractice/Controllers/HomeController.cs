using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using DatabasePractice.Models;
using Microsoft.EntityFrameworkCore;

namespace DatabasePractice.Controllers
{
    public class HomeController : Controller
    {
        // private readonly ILogger<HomeController> _logger;
        private MyContext _context;

        public HomeController(MyContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            List<Icecream> allIceCreams = _context.Icecream.ToList();
            ViewBag.allIceCreams = allIceCreams;
            return View();
        }

        [HttpPost("process")]
        public IActionResult Process(Icecream newIcecream)
        {
            if(ModelState.IsValid)
            {
                Console.WriteLine("It worked!!");
                _context.Add(newIcecream);
                _context.SaveChanges();
                return RedirectToAction("Index");
            }else {
                return View("Index");
            }
        }

        [HttpGet("delete/{icid}")]
        public IActionResult deleteOne(int icid)
        {
            Icecream icToDelete = _context.Icecream.SingleOrDefault(a => a.IcecreamId == icid);
            _context.Icecream.Remove(icToDelete);
            _context.SaveChanges();
            return RedirectToAction("Index");
        }
        [HttpGet("edit/{icid}")]
        public IActionResult editOne(int icid)
        {
            Icecream icToEdit = _context.Icecream.FirstOrDefault(a => a.IcecreamId == icid);
            return View(icToEdit);
        }
        [HttpPost("update/{icid}")]
        public IActionResult updateOne(int icid, Icecream editedIceCream)
        {
            Icecream orginal = _context.Icecream.FirstOrDefault(a => a.IcecreamId == icid);
            orginal.Flavor = editedIceCream.Flavor;
            orginal.Topping = editedIceCream.Topping;
            orginal.hasCherry = editedIceCream.hasCherry;
            orginal.Container = editedIceCream.Container;
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
