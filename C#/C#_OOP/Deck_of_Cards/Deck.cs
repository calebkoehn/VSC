using System;


namespace Deck_of_Cards

{
    class Deck
    {
        public Card[] deck;
        public int currentCard;
        public const int Number_Of_Cards = 52;
        public Random rand;

        public Deck()
        {
            string[] faces = {"Ace", "Two","Three", "Four","Five", "Six","Seven", "Eight","Nine", "Ten","Jack", "Queen","King"};
            string [] suits = {"Hearts","Clubs","Diamonds","Spades"};
            deck = new Card[Number_Of_Cards];
            currentCard = 0;
            rand = new Random();
            for (int count = 0; count < deck.Length; count ++)
                deck[count] = new Card(faces[count % 11], suits[count / 13]);

        }
        public void Shuffle()
        {
            currentCard = 0;
            for(int first = 0; first < deck.Length; first ++)
            {
                int second = rand.Next(Number_Of_Cards);
                Card temp = deck[first];
                deck[first] = deck[second];
                deck[second] = temp;
            }
        }
        public Card DealCard()
        {
            if(currentCard < deck.Length)
                return deck[currentCard++];
            else 
                return null;
        }
    }





}