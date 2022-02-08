using System;
using System.Collections.Generic;

namespace Puzzles
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            int[]myarray = new int[]{7,10,15,19,24,8,13,17,21,16};
            MinMaxAverage(myarray);
            
        }
        public static void MinMaxAverage(int[] numbers)
        {
            int currentMin = Int32.MaxValue,
                currentMax = Int32.MinValue,
                sum = 0;

            foreach(int num in numbers)
            {
                sum += num;
                if(currentMax < num)
                    currentMax = num;
                if(currentMin > num)
                    currentMin = num;
            }
            Console.WriteLine($"The Min Value is: {currentMin}");
            Console.WriteLine($"The Max Value is: {currentMax}");
            Console.WriteLine($"The Average Value is: {(float)sum/numbers.Length}");
        }

        public static string TossACoin()
        {
            Console.WriteLine("Tossing a Coin!");

            Random rand = new Random();
            string result;
            if(rand.Next(2) == 0)
                result = "Tails";
            else
                result = "Heads";

            Console.WriteLine($"The result is: {result}");
            return result;
        }

        public static List<string> Names()
        {
            List<string> names = new List<string>(){"Todd", "Tiffany", "Charlie", "Geneva", "Sydney"};
            List<string> shuffled = new List<string>();
            int count = names.Count;
            for(int i=0; i <count; i++)
            {
                Random rand = new Random();
                string name = names[rand.Next(names.Count)];
                shuffled.Add(name);
                names.Remove(name);
                Console.WriteLine(shuffled[i]);

            }
            return shuffled;
        }
    }
}
