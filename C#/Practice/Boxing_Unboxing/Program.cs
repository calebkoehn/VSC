using System;
using System.Collections.Generic;

namespace Boxing_Unboxing
{
    class Program
    {
        static void Main(string[] args)
        {
            var boxed = new List<object>();

            boxed.Add(7);
            boxed.Add(28);
            boxed.Add(-1);
            boxed.Add(true);
            boxed.Add("chair");

            int sum = 0;
            foreach(var item in boxed)
            {
                Console.WriteLine(item);
                if(item is int)
                {
                    sum +=(int)item;
                    Console.WriteLine($"Current sum: {sum}");
                }
            }
        }
    }
}
