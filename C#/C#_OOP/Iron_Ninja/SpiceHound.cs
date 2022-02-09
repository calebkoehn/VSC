using System;

namespace Iron_Ninja

{
    class SpiceHound : Ninja
    {
        public override bool IsFull
        {
            get { return calorieIntake > 1200; }
        }
        public override void Consume(IConsumable item)
        {
            if(IsFull)
            {
                Console.WriteLine("Too full, won't do it.");
                return;
            }
            int newCalories = (item.IsSpicy) ? item.Calories - 5 : item.Calories;
                calorieIntake += newCalories;
                ConsumptionHistory.Add(item);
                item.GetInfo();
        }
    }
}