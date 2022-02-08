using System;

namespace Vehicle_Practice

{
    class Vehicle
    {
        private int maxNumPassengers;
        private string color;
        public int MaxNumPassengers
        {
            get { return maxNumPassengers; }
        }
        public string Color
        {
            get { return color; }
        }
        public Vehicle(int maxPass, string col)
        {
            maxNumPassengers = maxPass;
            color = col;
        }
    }
}