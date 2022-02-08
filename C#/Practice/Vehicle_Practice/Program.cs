using System;

namespace Vehicle_Practice
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Vehicle v = new Vehicle(7, "Green");
            Console.WriteLine(v.Color);
            Console.WriteLine(v.MaxNumPassengers);
        }
    }
}

//     public class Vehicle
//     {
//         public int NumPassengers;
//         public Vehicle(int val)
//         {
//             NumPassengers = val;
//         }
//     }

// }
