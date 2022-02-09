using System;

namespace Vehicle_Practice

{
    class Car : Vehicle
    {
        // We can add members that are unique to Cars, things that won't describe ALL vehicles
        public string Make;
        public string Model;
        // but when we define a constructor for Car, we need to satisfy any constructor requirements
        // for at least ONE constructor on the parent Vehicle class
        public Car(string color, string make, string model) : base(color)
        {
            Make = make;
            Model = model;
        }
    }
    public override void GetInfo()
    {
        base.GetInfo();
        Console.WriteLine($"Make: {Make}");
        Console.WriteLine($"Model: {Model}");
    }
    public void Drive(double distance)
    {
        // 'Vehicle.Odometer' is inaccessible due to its protection level!!!
        Odometer += distance;
        Console.WriteLine("I'm driving!");
    }


}