let fruits = ["peach", "apple", "pear", "banana", 42];
console.log(fruits);

//find length of array
console.log(fruits.length);

//access a single element
console.log(fruits[0]);

//replace element by
let newFruit = "plum";
fruits[0] = newFruit;
//could also use a variable in the array


//arrays and loops
for (let i = 0; i < fruits.length; i++){
    if (fruits[i] === "banana"){
        break;
    }
    console.log(fruits[i]);
}

//function that
function arrayStringify(arr) {
    let result = "";
    for (let i = 0; i < arr.length; i++){
        //result += fruits[i];
        if (i > 0)  {
            result += ", ";
            //shorthand for result = result + ","
        }
        result += fruits[i];
    }
    return result;
}
console.log("stringified fruit is " + arrayStringify(fruits));


//for each loop
console.log("-----for each----");
fruits.forEach(function (fruit ) {
    console.log(fruit);
});

function printFruit(fruit, index) {
    //escape early if we see an apple
    if (fruit === "apple") {
        return;
    }
    console.log(`${index + 1}. ${fruit}`);
}
 fruits.forEach(printFruit);


//for of loop
console.log("---------");
let i = 1;
for (let fruit of fruits) {
    if (fruit === "apple") {
        break;
    }
    fruit = "gross!!"
    console.log(i + ". " + fruit);
    i++;
}
//console.log(fruits);
//we only changed the local variable so it didnt affect the array
//basically fruit is NOT the same thing as fruits itself




