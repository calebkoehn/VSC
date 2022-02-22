using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using FEB22Demo.Models;
using Microsoft.EntityFrameworkCore;

namespace FEB22Demo.Controllers
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
            ViewBag.AllCollectors = _context.Collectors.Include(a => a.MyCollection).OrderBy(a => a.Name).ToList();
            return View();
        }

        [HttpPost("addCollector")]
        public IActionResult addCollector(Collector newCollector)
        {
            if(ModelState.IsValid)
            {
                _context.Collectors.Add(newCollector);
                _context.SaveChanges();
                return RedirectToAction("Index");
            } else {
                return View("Index");
            }
        }

        [HttpGet("Records")]
        public IActionResult Records()
        {
            ViewBag.AllRecords = _context.Records.OrderBy(a => a.Title).ToList();
            return View();
        }

        [HttpPost("addRecord")]
        public IActionResult addRecord(Record newRecord)
        {
            if(ModelState.IsValid)
            {
                _context.Records.Add(newRecord);
                _context.SaveChanges();
                return RedirectToAction("Records");
            } else {
                ViewBag.AllRecords = _context.Records.OrderBy(a => a.Title).ToList();
                return View("Records");
            }
        }

        [HttpGet("collector/{cid}")]
        public IActionResult OneCollector(int cid)
        {
            Collector OneCollector = _context.Collectors.Include(s => s.MyCollection).ThenInclude(d => d.Record).FirstOrDefault(a => a.CollectorId == cid);
            ViewBag.AllRecords = _context.Records.OrderBy(a => a.Title).ToList();
            return View(OneCollector);
        }

        [HttpPost("addToCollection")]
        public IActionResult addToCollection(Collection newAddition)
        {
            _context.Collections.Add(newAddition);
            _context.SaveChanges();
            return Redirect($"/collector/{newAddition.CollectorId}");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
