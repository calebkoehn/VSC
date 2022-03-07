class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, resilience) {
        super(name, cost);
        this.power = power;
        this.resilience = resilience;
    }
    attack(target) {
        if(target instanceof Unit){
            target.resilience -= this.power;
        } else {
            throw new Error("Target must be a unit!");
        }
    }
    showStats(){
        console.log("name: ", this.name + " power: " + this.power + " resilience " + this.resilience)
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play(target) {
        if (target instanceof Unit && Number.isInteger(target[this.stat])) {
            target[this.stat] += this.magnitude;
        } else {
            throw new Error("Target must be a unit or have that stat!");
        }
    }
}

// Turn 1

const red_Belt_Ninja = new Unit("Red Belt Ninja", 3,3,4);
const hard_Algo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", 'resilience', 3);

hard_Algo.play(red_Belt_Ninja);
console.log("Turn 1");
red_Belt_Ninja.showStats();


//Turn 2

const black_Belt_Ninja = new Unit("Black Belt Ninja", 4, 5, 4);
const unhandled_Promise_Rejection = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", 'resilience', -2);

unhandled_Promise_Rejection.play(red_Belt_Ninja);
console.log("Turn 2");
red_Belt_Ninja.showStats();
black_Belt_Ninja.showStats();


//Turn3

const pair_Programming = new Effect("Pair Programming", 3, "Increase target's power by 2", 'power', 2);

pair_Programming.play(red_Belt_Ninja);
red_Belt_Ninja.attack(black_Belt_Ninja);

console.log("Turn 3");
red_Belt_Ninja.showStats();
black_Belt_Ninja.showStats();