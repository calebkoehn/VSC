function recursiveGreatestCommonFactor(num1, num2){
    if (! num2){
        return num1;
    }
    return recursiveGreatestCommonFactor(num2, num1 % num2)
}

console.log(recursiveGreatestCommonFactor(50,180));