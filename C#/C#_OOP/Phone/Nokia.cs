using System;

namespace Phone

{

    public class Nokia : Phone, IRingable
    {
        public Nokia(string versionNumber, int batteryPercentage, string carrier, string ringTone)
            : base(versionNumber, batteryPercentage, carrier, ringTone) 
            { 
                isUnlocked = false;
            }
        private bool isUnlocked;
        public string Ring()
        {
            return RingTone; 
        }
        public string Unlock()
        {
            isUnlocked = true;
            return "Unlocked with Pin";
        }
        public override void DisplayInfo()
        {
            Console.WriteLine("$$$$$$$$$");
            Console.WriteLine($"Nokia: {VersionNumber}"); 
            Console.WriteLine($"Carrier: {Carrier}"); 
            Console.WriteLine($"Ring Tone: {RingTone}"); 
            Console.WriteLine($"$$$$$$$$");             
        }
    }

}