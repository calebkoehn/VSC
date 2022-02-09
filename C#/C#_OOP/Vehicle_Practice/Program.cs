using System;
using System.Collections.Generic;
using Vehicle_Practice;

namespace Vehicle_Practice
{
    class Program
    {
        public static void Main(string[] args)
        {
            Vehicle someVehicle = new Vehicle("Green");
            Car someCar = new Car("Yellow", "Dodge", "Dart");
            someVehicle.GetInfo();
            someCar.GetInfo();
        }
    }

}
