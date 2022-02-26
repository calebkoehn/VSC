using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using BeltExam.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Session;

namespace BeltExam.Controllers
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
        public IActionResult Dashboard()
        {
            if(HttpContext.Session.GetString("UserEmail")== null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
            List <DojoActivity> AllActivities = _context.DojoActivities.Include(g => g.DojoEventList).ThenInclude(a => a.User).OrderBy(m => m.Date).ToList();
            return View(AllActivities);
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

        [HttpGet("NewActivity")]
        public IActionResult NewActivity()
        {
            if(HttpContext.Session.GetString("UserEmail")== null)
            {
                return RedirectToAction("Index");
            } else {
                ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
                return View();
            }
        }
        [HttpPost("AddActivityToDB")]
        public IActionResult AddActivityToDB(DojoActivity newActivity)
        {
            if(ModelState.IsValid)
            {
                if(newActivity.Date < DateTime.Now)
                {
                    ModelState.AddModelError("Date","Date Must be in the Future");
                    ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
                    return View("NewActivity");
                }
            
                _context.DojoActivities.Add(newActivity);
                _context.SaveChanges();
                return RedirectToAction("Dashboard");
            } else {
                ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
                return View("NewActivity");
            }
        }
        [HttpGet("Activity/{aid}")]
        public IActionResult OneActivity(int aid)
        {
            if(HttpContext.Session.GetString("UserEmail")== null)
            {
                return RedirectToAction("Index");
            }
            ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
            ViewBag.Activity = _context.DojoActivities.Include(b => b.Organizer).Include(g => g.DojoEventList).ThenInclude(a => a.User).FirstOrDefault( f => f.DojoActivityId == aid);
            return View();
        }
        [HttpGet("/Delete/{aid}")]
        public RedirectToActionResult DeleteActivity(int aid)
        {
            if(HttpContext.Session.GetString("UserEmail")== null)
            {
                return RedirectToAction("Index");
            }
            DojoActivity WeddingToDelete = _context.DojoActivities.SingleOrDefault(f => f.DojoActivityId == aid);
            _context.DojoActivities.Remove(WeddingToDelete);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [HttpGet("join/{DojoActivityId}")]
        public RedirectToActionResult join(int DojoActivityId)
        {
            if(HttpContext.Session.GetString("UserEmail")== null)
            {
                return RedirectToAction("Index");
            }
            User LoggedInUser = _context.Users.FirstOrDefault(u => u.Email == HttpContext.Session.GetString("UserEmail"));
            Association NewJoin = new Association();
            NewJoin.UserId = LoggedInUser.UserId;
            NewJoin.DojoActivityId = DojoActivityId;
            _context.Add(NewJoin);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }
        [HttpGet("leave/{DojoActivityId}/{userid}")]
        public RedirectToActionResult leave(int DojoActivityId,int userid)
        {
            if(HttpContext.Session.GetString("UserEmail")== null)
            {
                return RedirectToAction("Index");
            }
            Association leave = _context.Associations.FirstOrDefault(u => u.DojoActivityId == DojoActivityId && u.UserId == userid);
            _context.Remove(leave);
            _context.SaveChanges();
            return RedirectToAction("Dashboard");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
