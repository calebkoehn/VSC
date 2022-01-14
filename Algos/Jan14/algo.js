// Given a dollar amount with change (an integer w/decimal) convert to change. Make sure to count the largest denomination first!

// Example: 3.21 --> 12 quarters, 2 dimes, 1 penny

function convertToCoinChange(amount, coins) {
    var change = {
        'quarters':0,
        'dimes':0,
        'nickels': 0,
        'pennies': 0,
    }

    if (amount === 0){
        return [];
    } 
    else{
    if (amount >= coins[0]) {
        left = (amount - coins[0]);
        return [coins[0]].concat( convertToCoinChange(left, coins) );
    } 
    else{
        coins.shift();
        return convertToCoinChange(amount, coins);
        }
    }
} 
console.log(convertToCoinChange(26, [25, 10, 5,1]));