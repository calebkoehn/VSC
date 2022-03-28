// Binary to Decimal
// Given a binary string, return the number it equates to
// Ex: given "1101101" return 109
// Ex: given "100" return 4
// Ex: given "10101" return 21

function binaryToDecimal(binary){
    var runner = 0;
    var total = 0;
    for(i=binary.length-1;i>=0;i--){
        if(binary[i] === "1"){
            total += Math.pow(2,runner)  
        }
        runner++;
    }
    return total;
}
console.log(binaryToDecimal("100"));
console.log(binaryToDecimal("1101101"));
console.log(binaryToDecimal("10101"));
    
  //There are 10 types of people in this world...those who understand binary and those who don't
    




  // Decimal to Binary
  // Given a (whole) number, return the value in binary
    function decimalToBinary(dec){
    // Your code goes here
    }
  // Ex: given 109 return "1101101"
  // Ex: given 4 return "100"
  // Ex: given 21 return "10101"
    
  // Note, typically binary has a leading "0b" in front of binary numbers (ex: "0b1101101") - try to modify your code to account for this after getting it to work


