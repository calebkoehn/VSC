//take in a string representing an int in hexadecimal 
//notation and return the value in decimal notation
// given "1D2", return 466
const hexStrToDec = (str) => {
    return parseInt(str, 16);
}

// console.log(hexStrToDec("1D2"));
// console.log(hexStrToDec("2C1"));
// console.log(hexStrToDec("3B5"));
// console.log(hexStrToDec("FFF"));

//given an integer, return a string representing the 
//hexadecimal value
//given 108, return "6C"
const decToHexStr = (val) => {
    return val.toString(16);
}

// console.log(decToHexStr(108));
// console.log(decToHexStr(420));


function decimalToHexString2(number) {
    if (number < 0) {
        number = 0xFFFFFFFF + number + 1;
    }

    return number.toString(16).toUpperCase();
}

// console.log(decimalToHexString2(108));
// console.log(decimalToHexString2(48.6));
// console.log(decimalToHexString2(-127));


function decToHexStr3(val){
    var hex = Number(val).toString(16);
    hex = "000000".substring(0, 6 - hex.length) + hex;
    return hex;
}

// console.log(decToHexStr3(108));
// console.log(decToHexStr3(48.6));
// console.log(decToHexStr3(-127));