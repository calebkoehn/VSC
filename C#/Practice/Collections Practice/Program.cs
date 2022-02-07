using System;
using System.Collections.Generic;

namespace Collections_Practice
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arrayOfInts = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
            string[] names = {"Tim", "Martin", "Nikki", "Sara"};
            string[] alternating = {"True", "False","True", "False","True", "False","True", "False","True", "False",};
            List<string> flavors = new List<string>();

            flavors.Add("Chocolate");
            flavors.Add("Vanilla");
            flavors.Add("Strawberry");
            flavors.Add("Mint");
            flavors.Add("Rocky Road");

            Console.WriteLine($"There are {flavors.Count} ice cream flavors.");
            Console.WriteLine(flavors[2]);
            flavors.RemoveAt(2);
            Console.WriteLine($"There are {flavors.Count} ice cream flavors.");

            Dictionary<string, string> users = new Dictionary<string, string>();
            users.Add("Tim", "Vanilla");
            users.Add("Martin", "Chocolate");
            users.Add("Niki", "Strawberry");
            users.Add("Sara", "Strawberry");

            foreach (KeyValuePair<string,string> entry in users)
            {
                Console.WriteLine(entry.Key + " - " + entry.Value);
            }
        }
    }
}
