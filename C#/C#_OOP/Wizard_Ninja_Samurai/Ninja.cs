using System;

namespace Wizard_Ninja_Samurai

{
    class Ninja : Human

    {
        public Ninja(string name) : base(name, 3,3,100,100) {}

        public override int Attack(Human target)
        {
            Random rand = new Random();
            int dmg = 5 * Dexterity;
            if(rand.Next(100) <=20)
                dmg += 10;

            return base.Attack(target, dmg);
        }
        public void Steal(Human target)
        {
            health += base.Attack(target, 10);
        }
    }


}