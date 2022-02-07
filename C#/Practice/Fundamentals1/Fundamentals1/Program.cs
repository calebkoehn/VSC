using System;

namespace Fundamentals1
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 1;
            while (i < 256)
            {
                Console.WriteLine(i);
                i = i + 1;
            }
            for (int x = 1; x <= 100; x++)  
            {  
                if (x % 3 == 0 || x % 5 == 0)  
                {  
                    Console.WriteLine(x);  
                }  
            
            } 
            for (int j = 1; j <= 100; j++)  
            {  
                if (j % 3 == 0 && j % 5 == 0)  
                {  
                    Console.WriteLine("FizzBuzz");  
                }  
                else if (j % 3 == 0)  
                {  
                Console.WriteLine("Fizz");  
                }  
                else if (j % 5 == 0)  
                {  
                Console.WriteLine("Buzz");  
                }   
            } 
        }
    }
}

