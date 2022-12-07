//Math.random()
    console.log(Math.random());
    //will give us a number form 1 to 6
    console.log(Math.floor(Math.random() * 6 + 1));
    //show Math.random() to get a number from 0 to 9
    console.log(Math.random() * 6);
    //add 1 to change it to a number from 1 to 10

    //add floor to "truncate"
//doesnt work the same for negative numbers bc -4.999 would give -5
    //see if truncate is a function




//Math.round
console.log(Math.round(3.49));
//would give a 3 bc it rounds only w the first decimal

//how to round to arbitrary precision
console.log(Math.round(3.14159 * 1000));
//3141.59
console.log(Math.round(3.14159 * 1000)/1000);
//3.142


//Math.floor weird w negative numbers
console.log(Math.floor(-4.2));
//gives -5

//Math.ceil()

//Math.pow
console.log(Math.pow(10, 3));
console.log(10**3);

//Math.sqrt
console.log(Math.sqrt(3));

//Math.PI constant
console.log(Math.PI);


//write function to round float to a given precision
//ex roundFloat(3.14159, 3) -> 3.142
function roundFloat(floatNum, decimalDigit) {
    // 1. multiply floatNum by 10 to the power od decimalDigit
    floatNum = floatNum * (10 ** decimalDigit);
    // 2. call Math.round on floatNum
    floatNum = Math.round(floatNum);
    // 3. divide floatNUm by 10 to the power of decimalDigit
    floatNum = floatNum / ( 10 ** decimalDigit);
    return floatNum;
}
console.log(roundFloat(3.14159, 3));
