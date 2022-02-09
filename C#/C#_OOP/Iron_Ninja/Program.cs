using System;

namespace Iron_Ninja
{
    class Program
    {
        static void Main(string[] args)
        {
            Buffet b = new Buffet();
            SpiceHound sh = new SpiceHound();
            SweetTooth st = new SweetTooth();

            while(!sh.IsFull)
                sh.Consume(b.Serve());

            while(!st.IsFull)
                st.Consume(b.Serve());

            Ninja winner;
            string title;
            if(sh.ConsumptionHistory.Count > st.ConsumptionHistory.Count)
            {
                winner = sh;
                title = "Spice Hound";
            }
            else
            {
                winner = st;
                title = "Sweet Tooth";
            }
            Console.WriteLine($"{title} is crowned the winner! Consuming {winner.ConsumptionHistory.Count} items!");
        }
    }
}
