﻿using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using WeddingPlanner.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Session;

namespace WeddingPlanner.Controllers
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
                    ModelState.AddModelError("Eamil", "Eamil is already in use!");
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
                return RedirectToAction("Index");
            }
            ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
            ViewBag.AllWeddings = _context.Weddings.ToList();
            return View();
        }
        [HttpGet("NewWedding")]
        public IActionResult NewWedding()
        {
            ViewBag.LoggedInUser = _context.Users.FirstOrDefault(d => d.Email == HttpContext.Session.GetString("UserEmail"));
            return View();
        }
        [HttpPost("AddWeddingToDB")]
        public IActionResult AddWeddingToDb(PlanWedding newWedding)
        {
            if(ModelState.IsValid)
            {
                _context.PlanWeddings.Add(newWedding);
                _context.SaveChanges();
                return RedirectToAction("Dashboard");

            } else{
                return View("NewWedding");
            }
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
