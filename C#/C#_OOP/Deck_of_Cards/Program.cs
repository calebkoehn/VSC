using System;

namespace Deck_of_Cards
{
    class Program
    {
        static void Main(string[] args)
        {
            Deck deck1 = new Deck();
            deck1.Shuffle();
            for (int i =0; i < 52; i++)
            {
                Console.WriteLine("{0,-19}", deck1.DealCard());
                if ((i +1) % 4==0 )
                    Console.WriteLine();
            }
            Console.ReadLine();
        }
    }
}
