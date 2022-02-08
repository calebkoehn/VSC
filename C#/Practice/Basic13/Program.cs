using System;
using System.Collections.Generic;

namespace Basic13
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            // PrintNumbers();
            // PrintOdds();
            // PrintSum();
            int[]myarray = new int[]{5,46,7,68,25};
            // printArray(myarray);
            List<int> myList = new List<int>(){3,5,7,9,11};
            // printList(myList);
            // dojoReplace(myarray);
            // GetAverage(myarray);
            // FindMax(myarray);

        }
        public static void PrintNumbers()
        {
            for(int i=1; i <= 255; i++)
            {
                Console.WriteLine(i);
            }
        }

        public static void PrintOdds()
        {
            for (int i = 0; i <= 255; i++)
            {
                if(i%2 != 0)
                {
                    Console.WriteLine(i);
                }
            }
        }

        public static void PrintSum()
        {
            int sum = 0;
            for(int i=0; i <=255; i++)
            {
                Console.WriteLine(i);
                sum+=i;
                Console.WriteLine(sum);
            }
        }
        public static void printArray(int[] arr)
        {
            for(int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
            }
        }

        public static int FindMax(int[] numbers)
        {
            int currentMax = Int32.MinValue;
            foreach(int num in numbers)
            {
                if(currentMax < num)
                    currentMax = num;
            }
            Console.WriteLine($"Max is {currentMax}");
            return currentMax;
        }

        public static void GetAverage(int[] numbers)
        {
            int sum =0;
            foreach(int num in numbers)
            sum += num;

            float avg =(float)sum/numbers.Length;
            Console.WriteLine($"The average is: {avg}");
            // return avg;
        }

        public static int[] OddArray()
        {
            int size = (255/2) + 1;

            int[] odds = new int[size];

            int i = 0;
            for(int num =1; num <=255; num+=2)
            {
                odds[i] = num;
                i++;
            }
            return odds;
        }

        public static int GreaterThanY(int[] numbers, int y)
        {
            int total = 0;
            for(int i = 0; i< numbers.Length; i++)
            {
                if(numbers[i]>y)
                    total++;
            }
            return total;
        }

        public static void SquareArrayValues(int[] numbers)
        {
            for(int i = 0; i < numbers.Length; i++)
            {
                numbers[i] = numbers[i] * numbers[i];
            }
        }

        public static void EliminateNegatives(int[] numbers)
        {
            for(int i = 0; i < numbers.Length; i++)
            {
                if(numbers[i] <0)
                    numbers[i] =0;
            }
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
            Console.WriteLine($"Min: {currentMin}");
            Console.WriteLine($"Max: {currentMax}");
            Console.WriteLine($"Average: {(float)sum/numbers.Length}");
        }

        public static void ShiftValues(int[] numbers)
        {
            for(int i = 0; i < numbers.Length-1; i++)
            {
                numbers[i] = numbers[i +1];
            }
            numbers[numbers.Length-1] = 0;
        }
        public static object[] dojoReplace(int[] arr)
        {
            object[] newArray = new object[arr.Length];
            for(int i = 0; i < arr.Length; i++)
            {
                if(arr[i]<0)
                {
                    newArray[i] = "dojo";

                }else{
                    newArray[i] = arr[i];
                }
            }
            foreach(var j in newArray)
            {
                Console.WriteLine(j);
            }
            return newArray;
        }
    }

}
