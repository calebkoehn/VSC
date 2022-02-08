using System;
using System.Collections.Generic;

namespace Hungry_Ninja

{
    class Ninja
    {
        private int calorieIntake;
        public List<Food> FoodHistory;

        // add a constructor
        public Ninja()
        {
            calorieIntake = 0;
            FoodHistory = new List<Food>();

        }

        // add a public "getter" property called "IsFull"
        public bool IsFull
        {
            get
            {
                return calorieIntake > 1400;
            }
        }

        // build out the Eat method
        public bool Eat(Food item)
        {
            if(!IsFull)
            {
                calorieIntake += item.Calories;
                FoodHistory.Add(item);
                Console.WriteLine($"Ninja is eating {item.Name}");
            }
            else 
                Console.WriteLine("Ninja is Full!");
            return IsFull;
        }
    }

}