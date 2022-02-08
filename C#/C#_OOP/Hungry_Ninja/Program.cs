using System;

namespace Hungry_Ninja
{
    class Program
    {
        static void Main(string[] args)
        {
            Ninja ninja = new Ninja();
            Buffet buffet = new Buffet();

            while(!ninja.IsFull)
            {
                ninja.Eat(buffet.Serve());
            }
        }
    }
}
