using System;

namespace Wizard_Ninja_Samurai

{

    class Wizard : Human 
    {
        public Wizard(string name) : base(name,3,25,3,50) {}
        public void Heal(Human target)
        {
            int healAmount = 10 * Intelligence;
            target.Health += healAmount;
        }
        public override int Attack(Human target)
        {
            int dealt = base.Attack(target, Intelligence * 5);
            Health -= dealt;
            return dealt;
        }
    }



}