using System;

namespace Deck_of_Cards

{

    public class Card 
    {
        private string sVal;
        private int value;
        private string suit;

        public static string[] Suits = new string[4] {"Spades","Hearts","Diamonds","Clubs"};
        public Card(string s, int val)
        {
            switch(val)
            {
                case 11:
                    sVal = "Jack";
                    break;
                case 12:
                    sVal = "Queen";
                    break;
                case 13:
                    sVal = "King";
                    break;
                case 1:
                    sVal = "Ace";
                    break;
                default:
                    sVal = val.ToString();
                    break;
            }
            suit = s;
            value = val;
        }
        public void SayCard()
        {
            Console.WriteLine("The {0} of {1}", sVal, suit);
        }
    }
}