function pizzaOven(crust,sauce,cheese,toppings){
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish","traditional",["mozzarella"],["pepperoni","sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed","marinara",["mozzarella","feta"],["mushrooms","olives","onions"]);
console.log(p2);

var p3 = pizzaOven("hand tossed","alfredo",["mozzarella"],["chicken","onions"]);
console.log(p3);

var p4 = pizzaOven("thin crust","marinara",["mozzarella"],["arugula","olive oil"]);
console.log(p4);
