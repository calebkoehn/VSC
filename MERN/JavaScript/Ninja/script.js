function Ninja(name){
    this.name = name;
    this.health = 100;
    this.speed = 3;
    this.strength = 3;

    Ninja.prototype.sayName = function() {
        console.log("My name is " + this.name + "!")
    }

    Ninja.prototype.showStats = function() {
        console.log ("Name: " + this.name + ", Health: " + this.health + ", Speed: " + this.speed + ", Strength: " + this.strength)
    }

    Ninja.prototype.drinkSake = function() {
        this.health = this.health + 10;
        console.log(this.name + " drank Sake and their health is " + this.health + "!")
    }

}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


