using System;
using System.Collections.Generic;

namespace Basic13
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");
            // Print1to255();
            // PrintSum();
            int[]myarray = new int[]{-5,46,7,68,-25};
            // printArray(myarray);
            // List<int> myList = new List<int>(){3,5,7,9,11};
            // printList(myList);
            dojoReplace(myarray);

        }
        public static void Print1to255()
        {
            for(int i=1; i <= 255; i++)
            {
                Console.WriteLine(i);
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
        public static void LoopArray(int[] numbers)
        {

        }

        public static void printArray(int[] arr)
        {
            for(int i = 0; i < arr.Length; i++)
            {
                Console.WriteLine(arr[i]);
            }
        }

        public static void printList(List<int>listArr)
        {
            for(int i = 0; i < listArr.Count; i++)
            {
                Console.WriteLine(listArr[i]);
            }
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
