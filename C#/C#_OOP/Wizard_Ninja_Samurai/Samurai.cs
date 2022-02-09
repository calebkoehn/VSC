using System;

namespace Wizard_Ninja_Samurai

{
    class Samurai : Human 
    {
        public Samurai(string name) : base(name,3,3,3,200)
        {

        }

        public override int Attack(Human target)
        {
            int remainingHealth = Attack(target);
            if(remainingHealth < 50)
            {
                target.Health = 0;
                Console.WriteLine($"{target.Name} HAS BEEN DEALT THE DEATH BLOW!!!");
            }
            return remainingHealth;
        }
        public void Meditate()
        {
            Health = 200;
        }
    }


}