using System;
using System.Collections.Generic;

namespace Iron_Ninja
{
    class Buffet
    {
        public List<IConsumable> Menu;

        //constructor
        public Buffet()
        {
            Menu = new List<IConsumable>()
        {
            new Food("Burger", 1000, false, false),
            new Food("Taco", 600, true, false),
            new Food("Steak", 400, false, false),
            new Food("French Fries", 350, false, false),
            new Food("Ice Cream", 800, false, false),
        };
        }

        public IConsumable Serve()
        {
            Random rand = new Random();
            return Menu[rand.Next(Menu.Count)];
        }
    }

}