// Joe drives a taco truck in the booming town of Squaresburg. He uses an array of [x,y] coordinates corresponding to locations of his customers.
//They walk to his truck, but he is fair-minded so he wants to minimize total distance from truck to customers. City blocks are perfect squares, and every street is two-way, at perfect right angles. 
//He only parks by street corners (coordinates like [37,-16]). Customers only travel on streets: coordinate [2,-2] is distance 4 from [0,0]. Joe checks the array before deciding where to park. 
//Given a customer coordinate array, return an optimal taco truck location.
// Example: given [[10,0],[-1,-10],[2,4]] return [2,0], as total distance is 25 (8+13+4) which is the shortest possible combined distance for all customers.


function tacoTruck(customerArray) {
    let i = 0
    let bounds = { highestZero: 0, lowestZero: 0, highestOne: 0, lowestOne: 0 }
    while (i < customerArray.length) {
        if (customerArray[i][0] > bounds.highestZero) {
            bounds.highestZero = customerArray[i][0];
        }
        if (customerArray[i][1] > bounds.highestOne) {
            bounds.highestOne = customerArray[i][1];
        }
        if (customerArray[i][0] < bounds.lowestZero) {
            bounds.lowestZero = customerArray[i][0];
        }
        if (customerArray[i][1] < bounds.lowestOne) {
            bounds.lowestOne = customerArray[i][1];
        }
        i++
    }
    let x = bounds.lowestZero;
    let y = bounds.lowestOne;
    let minDistance=null;
    let minDistanceCoords=[];
    while (x <= bounds.highestZero && y <= bounds.highestOne) {
        let total=0;
        let i=0
        while (i < customerArray.length) {
            total += Math.abs(customerArray[i][0]-x)+Math.abs(customerArray[i][1]-y);
            i++
        }
        if(minDistance>total||minDistance===null){
            minDistance=total;
            minDistanceCoords[0]=x
            minDistanceCoords[1]=y
        }
        if (y === bounds.highestOne) {
            y = bounds.lowestOne
            x++
            continue
        }
        y++
    }
    console.log(minDistance)
    return minDistanceCoords;
}