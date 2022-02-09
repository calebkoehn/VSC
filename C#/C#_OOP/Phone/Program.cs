using System;

namespace Phone
{
    class Program
    {
        static void Main(string[] args)
        {
            Galaxy s22 = new Galaxy("s22", 100, "Verizon", "Ring Ring");
            Nokia elevenHundred = new Nokia("1100", 80, "T-Mobile", "Ring Ring");

            s22.DisplayInfo();
            Console.WriteLine(s22.Ring());
            Console.WriteLine(s22.Unlock());
            Console.WriteLine("");

            elevenHundred.DisplayInfo();
            Console.WriteLine(elevenHundred.Ring());
            Console.WriteLine(elevenHundred.Unlock());
            Console.WriteLine("");
        }
    }
}
