using System;
using System.Collections.Generic;

namespace Collections_Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
            List<string> flavors = new List<string>();

            flavors.Add("Chocolate");
            flavors.Add("Vanilla");
            flavors.Add("Strawberry");
            flavors.Add("Mint");
            flavors.Add("Rocky Road");

            Console.WriteLine($"There are {flavors.Count} ice cream flavors.");
            Console.WriteLine(flavors[2]);
            // Console.WriteLine(flavors.Remove[2]);
            // Console.WriteLine($"There are {flavors.Count} ice cream flavors.");
        }
    }
}
