using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ProductsAndCategories.Models;
using Microsoft.EntityFrameworkCore;

namespace ProductsAndCategories.Controllers
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
            ViewBag.AllProducts = _context.Products.Include(a => a.ProductList).OrderBy(a => a.ProductId).ToList();
            return View();
        }

        [HttpPost("addProduct")]
        public IActionResult addProduct(Product newProduct)
        {
            if(ModelState.IsValid)
            {
                _context.Products.Add(newProduct);
                _context.SaveChanges();
                return RedirectToAction("Index");
            } else {
                return View("Index");
            }
        }

        [HttpGet("Categories")]
        public IActionResult Categories()
        {
            ViewBag.AllCategories = _context.Categories.OrderBy(a => a.Name).ToList();
            return View();
        }

        [HttpPost("addCategory")]
        public IActionResult addCategory(Category newCategory)
        {
            if(ModelState.IsValid)
            {
                _context.Categories.Add(newCategory);
                _context.SaveChanges();
                return RedirectToAction("Categories");
            } else {
                ViewBag.AllCategories = _context.Categories.OrderBy(a => a.Name).ToList();
                return View("Categories");
            }
        }

        [HttpGet("product/{cid}")]
        public IActionResult OneProduct(int cid)
        {
            Product OneProduct = _context.Products.Include(s => s.ProductList).ThenInclude(d => d.Category).FirstOrDefault(a => a.ProductId == cid);
            ViewBag.AllCategories = _context.Categories.OrderBy(a => a.Name).ToList();
            return View(OneProduct);
        }

        [HttpPost("addToCategory")]
        public IActionResult addToCategory(Assocation newAddition)
        {
            _context.Assocations.Add(newAddition);
            _context.SaveChanges();
            return Redirect($"/product/{newAddition.ProductId}");
        }

        [HttpGet("category/{cid}")]
        public IActionResult OneCategory(int cid)
        {
            Category OneCategory = _context.Categories.Include(s => s.CategoryList).ThenInclude(d => d.Category).FirstOrDefault(a => a.CategoryId == cid);
            ViewBag.AllProducts = _context.Products.OrderBy(a => a.Name).ToList();
            return View(OneCategory);
        }

        [HttpPost("addToProduct")]
        public IActionResult addToProduct(Assocation newAddition)
        {
            _context.Assocations.Add(newAddition);
            _context.SaveChanges();
            return Redirect($"/category/{newAddition.CategoryId}");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
