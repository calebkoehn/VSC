using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsORM.Models;


namespace SportsORM.Controllers
{
    public class HomeController : Controller
    {

        private static Context _context;

        public HomeController(Context DBContext)
        {
            _context = DBContext;
        }

        [HttpGet("")]
        public IActionResult Index()
        {
            ViewBag.BaseballLeagues = _context.Leagues
                .Where(l => l.Sport.Contains("Baseball"))
                .ToList();
            return View();
        }

        [HttpGet("level_1")]
        public IActionResult Level1()
        {
            ViewBag.AllWomens = _context.Leagues.Where(w => w.Name.Contains("Womens"));
            ViewBag.AllHockey = _context.Leagues.Where(w => w.Sport.Contains("Hockey"));
            ViewBag.AllNonFootball = _context.Leagues.Where(w => !w.Sport.Contains("Football"));
            ViewBag.AllConferences = _context.Leagues.Where(c => c.Name.Contains("Conference"));
            ViewBag.AllAtlantic = _context.Leagues.Where(w => w.Name.Contains("Atlantic"));
            ViewBag.AllDallas = _context.Teams.Where(w => w.Location.Contains("Dallas"));
            ViewBag.AllRaptors = _context.Teams.Where(w => w.TeamName.Contains("Raptors"));
            ViewBag.AllCity = _context.Teams.Where(w => w.Location.Contains("City"));
            ViewBag.AllT = _context.Teams.Where(w => w.TeamName.Contains("T"));
            ViewBag.AllSorted = _context.Teams.OrderBy(w => w.Location);
            ViewBag.AllSortedTeam = _context.Teams.OrderByDescending(w => w.TeamName);
            ViewBag.AllCooper = _context.Players.Where(w => w.LastName.Contains("Cooper"));
            ViewBag.AllJoshua = _context.Players.Where(w => w.FirstName.Contains("Joshua"));
            ViewBag.AllCooperNoJ = _context.Players.Where(w => w.LastName.Contains("Cooper")& !w.FirstName.Contains("Joshua"));
            ViewBag.AllAW = _context.Players.Where(w => w.FirstName.Contains("Alexander") || w.FirstName.Contains("Wyatt"));
            return View();
        }

        [HttpGet("level_2")]
        public IActionResult Level2()
        {
            return View();
        }

        [HttpGet("level_3")]
        public IActionResult Level3()
        {
            return View();
        }

    }
}