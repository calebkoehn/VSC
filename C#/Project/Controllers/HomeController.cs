using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Project.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Session;

namespace Project.Controllers
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
            HttpContext.Session.Clear();
            ViewBag.Loggedin = false;
            return View();
        }

        [HttpPost("register")]
        public IActionResult Register(User newUser)
        {
            if(ModelState.IsValid)
            {
                if(_context.Users.Any(e => e.Email == newUser.Email))
                {
                    ModelState.AddModelError("Email", "Email is already in use!");
                    return View("Index");
                }
                PasswordHasher<User> Hasher = new PasswordHasher<User>();
                newUser.Password = Hasher.HashPassword(newUser, newUser.Password);
                _context.Users.Add(newUser);
                _context.SaveChanges();
                HttpContext.Session.SetString("UserEmail", newUser.Email);
                return RedirectToAction("Dashboard");
            } else  {
                ViewBag.Loggedin = false;
                return View("Index");
            }
        }
        [HttpPost("login")]
        public IActionResult Login(LogUser loginUser)
        {
            if(ModelState.IsValid)
            {
                User UserInDb = _context.Users.FirstOrDefault(s => s.Email == loginUser.LogEmail);
                if(UserInDb == null)
                {
                    ModelState.AddModelError("LogEmail","Invalid Login");
                    return View("Index");
                }
                PasswordHasher<LogUser> Hasher = new PasswordHasher<LogUser>();
                PasswordVerificationResult result = Hasher.VerifyHashedPassword(loginUser, UserInDb.Password, loginUser.LogPassword);
                if(result == 0)
                {
                    ModelState.AddModelError("LogPassword","Invalid Login");
                    return View("Index");
                }
                HttpContext.Session.SetString("UserEmail", UserInDb.Email);
                return RedirectToAction("Dashboard");
            } else  {
                ViewBag.Loggedin = false;
                return View("Index");
            }
        }

        [HttpGet("Dashboard")]
        public IActionResult Dashboard ()
        {
            if(HttpContext.Session.GetString("UserEmail")== null)
            {
                User Seller = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
                return RedirectToAction("Index");
            }
            ViewBag.LoggedInUser = _context.Users.Include(d => d.Inventory).Include(f => f.MyOrders).ThenInclude(g => g.Product).FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
            return View();
        }
        [HttpGet("AddProduct")]
        public IActionResult AddProduct()
        {
            ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
            return View();
        }

        [HttpPost("AddProductToDB")]
        public IActionResult AddProductToDb(Product newProduct)
        {
            if(ModelState.IsValid)
            {
                _context.Products.Add(newProduct);
                _context.SaveChanges();
                return RedirectToAction("Dashboard");

            } else{
                return View("AddProduct");
            }
        }

        [HttpGet("AllProducts")]
        public IActionResult AllProducts()
        {
            if(HttpContext.Session.GetString("UserEmail")== null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
            ViewBag.AllProducts = _context.Products.ToList();
            return View();
        }
        [HttpGet("Product/{pid}")]
        public IActionResult OneProduct(int pid)
        {
            if(HttpContext.Session.GetString("UserEmail")== null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
            ViewBag.Product = _context.Products.FirstOrDefault( f => f.ProductId == pid);
            return View();
        }
        [HttpGet("Product/Edit/{pid}")]
        public IActionResult EditProduct(int pid)
        {
            if(HttpContext.Session.GetString("UserEmail")== null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
            Product oldProduct = _context.Products.FirstOrDefault(d=> d.ProductId == pid);
            
            return View(oldProduct);
        }
        [HttpPost("Product/Update/{pid}")]
        public IActionResult UpdateProduct(int pid, Product UpdatedProduct)
        {
            Product oldProduct = _context.Products.FirstOrDefault(d=> d.ProductId == pid);
            if(ModelState.IsValid)
            {
                oldProduct.ProductName = UpdatedProduct.ProductName;
                oldProduct.Picture = UpdatedProduct.Picture;
                oldProduct.Quantity = UpdatedProduct.Quantity;
                oldProduct.Price = UpdatedProduct.Price;
                oldProduct.UpdatedAt = DateTime.Now;
                _context.SaveChanges();
                return Redirect($"/Product/{pid}");
            } else {
                ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
                return View("EditProduct", oldProduct);
            }
        }
        [HttpGet("Product/Delete/{pid}")]
        public IActionResult DeleteProduct(int pid)
        {
            if(HttpContext.Session.GetString("UserEmail")== null)
            {
                return RedirectToAction("Index");
            }
            Product ProductToDelete = _context.Products.SingleOrDefault(f => f.ProductId == pid);
            _context.Products.Remove(ProductToDelete);
            _context.SaveChanges();
            return View("Dashboard");
        }
        [HttpGet("Logout")]
        public IActionResult Logout()
        {
            if(HttpContext.Session.GetString("UserEmail")== null)
            {
                return RedirectToAction("Index");
            }
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }
        [HttpPost("Product/buy")]
        public IActionResult BuyProduct(Order newOrder)
        {
            Product ProductToBuy = _context.Products.FirstOrDefault(d => d.ProductId == newOrder.ProductId);
            if(ModelState.IsValid)
            {
                _context.Orders.Add(newOrder);
                ProductToBuy.Quantity -= newOrder.Quantity;
                _context.SaveChanges();
                return RedirectToAction("Dashboard");
            } else {
                return View("OneProduct", newOrder.ProductId);
            }
        }

        
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
