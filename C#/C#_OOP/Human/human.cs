using System;

namespace Human

{

class Human
{
    // Fields for Human
        public string Name;
        public int Strength;
        public int Intelligence;
        public int Dexterity;
        private int health
        {
            get { return health;}
        }
        public Human(string Name, int Strength, int Intelligence, int Dexterity, int health)
        {
            Name = "";
            Strength = 3;
            Intelligence = 3;
            Dexterity = 3;
            health = 100;
        }
        public int Attack(Human target)
        {
        }
    }
}

