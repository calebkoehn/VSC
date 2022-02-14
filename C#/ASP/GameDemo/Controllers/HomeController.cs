using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using GameDemo.Models;
using Microsoft.AspNetCore.Http;

namespace GameDemo.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            if(HttpContext.Session.GetString("playerChoice") == null)
            {
                HttpContext.Session.SetString("playerChoice", "l-rock.png");
                HttpContext.Session.SetString("compImgChoice", "r-scissors.png");
                HttpContext.Session.SetInt32("Wins", 0);
                HttpContext.Session.SetInt32("Losses", 0);
                HttpContext.Session.SetInt32("Draws", 0);
            }
            ViewBag.PlayerChoice = HttpContext.Session.GetString("playerChoice");
            ViewBag.ComputerChoice = HttpContext.Session.GetString("compImgChoice");
            ViewBag.Wins = HttpContext.Session.GetInt32("Wins");
            ViewBag.Losses = HttpContext.Session.GetInt32("Losses");
            ViewBag.Draws = HttpContext.Session.GetInt32("Draws");
            return View();
        }

        [HttpGet("player/{choice}")]
        public IActionResult playerChoice(string choice)
        {
            // We need an array of choices
            // Then we need to randomly pick one
            string[] compChoices = {"rock", "paper", "scissors"};
            Random rand = new Random();
            string compChoice = compChoices[rand.Next(3)];
            Console.WriteLine($"Your computer choice is: {compChoice}");
            Console.WriteLine($"You picked {choice}");
            string imgChoice = $"l-{choice}.png";
            string compImg = $"r-{compChoice}.png";
            Console.WriteLine(imgChoice);
            HttpContext.Session.SetString("playerChoice", imgChoice);
            HttpContext.Session.SetString("compImgChoice", compImg);
            // Logic where we figure out who won
            if(choice == "paper" && compChoice == "scissors")
            {
                int? amount = HttpContext.Session.GetInt32("Losses");
                HttpContext.Session.SetInt32("Losses", (int)++amount);
                Console.WriteLine("You lost");
            }
            else if(choice == "paper" && compChoice == "rock")
            {
                int? amount = HttpContext.Session.GetInt32("Wins");
                HttpContext.Session.SetInt32("Wins", (int)++amount);
                Console.WriteLine("You win");
            }
            else if(choice == "paper" && compChoice == "paper")
            {
                int? amount = HttpContext.Session.GetInt32("Draws");
                HttpContext.Session.SetInt32("Draws", (int)++amount);
                Console.WriteLine("You draw");
            }
            else if(choice == "rock" && compChoice == "scissors")
            {
                int? amount = HttpContext.Session.GetInt32("Wins");
                HttpContext.Session.SetInt32("Wins", (int)++amount);
                Console.WriteLine("You win");
            }
            else if(choice == "rock" && compChoice == "rock")
            {
                int? amount = HttpContext.Session.GetInt32("Draws");
                HttpContext.Session.SetInt32("Draws", (int)++amount);
                Console.WriteLine("You draw");
            }
            else if(choice == "rock" && compChoice == "paper")
            {
                int? amount = HttpContext.Session.GetInt32("Losses");
                HttpContext.Session.SetInt32("Losses", (int)++amount);
                Console.WriteLine("You lost");
            }
            else if(choice == "scissors" && compChoice == "scissors")
            {
                int? amount = HttpContext.Session.GetInt32("Draws");
                HttpContext.Session.SetInt32("Draws", (int)++amount);
                Console.WriteLine("You draw");
            }
            else if(choice == "scissors" && compChoice == "rock")
            {
                int? amount = HttpContext.Session.GetInt32("Losses");
                HttpContext.Session.SetInt32("Losses", (int)++amount);
                Console.WriteLine("You lost");
            }
            else if(choice == "scissors" && compChoice == "paper")
            {
                int? amount = HttpContext.Session.GetInt32("Wins");
                HttpContext.Session.SetInt32("Wins", (int)++amount);
                Console.WriteLine("You win");
            }
            return RedirectToAction("Index");
        }

        [HttpGet("reset")]
        public IActionResult Reset()
        {
            HttpContext.Session.Clear();
            return RedirectToAction("Index");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}