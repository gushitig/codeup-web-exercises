let fruits = ["peach", "apple", "pear", "banana", 42];
console.log(fruits);

//find length of array
console.log(fruits.length);

//access a single element
console.log(fruits[0]);

//replace element by
let newFruit = "tomato";
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

//******MANIPULATING ARRAYS
//adding elements
    //push fruit to end of array - will not change the order or index of array
    fruits.push("guava");
    console.log(fruits);
    //unshift a fruit to the front of the array
    fruits.unshift("plum");
    console.log(fruits);
//removing elements
    //pop removes elements from the end
    fruits.pop();
    console.log(fruits);
    //shift removes elements from the front
    fruits.shift();
    console.log(fruits);
//finding values in the array
    //indexOf
    //use .indexOf for something that is not in the array
    console.log(fruits.indexOf("apple"));
    console.log(fruits.indexOf("guava"));
    //also show .indexOf(<str>, <index to start
    fruits.push("apple");
    fruits.unshift("apple");
    console.log(fruits);
    console.log(fruits.indexOf("apple")); //WILL ONYL RETURN THE FIRST ONE IT FINDS
    console.log(fruits.indexOf("apple", 1));// will find the next one starting search after the first one was found, in this case after index 1
    // .lastIndexOf

    //includes
    console.log(fruits.includes("pear"));
    console.log(fruits.includes("durian"));

    //copying a subset of an array (does not modify original index)
    //.slice(start index inclusive, end index exclusiv)
    console.log(fruits.slice(2, 5));
    //slice w 1 argument
    console.log(fruits.slice(2));
//reversing an array (does modify original)
    // .reverse()
    fruits.reverse();
    console.log(fruits);

    //sort (does modify original)
    fruits.sort();
    console.log(fruits);
    //also show sorted array of numbers
    let numArray = [1, 2, 3, 4, 5, 10, 11, 12];
    numArray.sort();
    console.log(numArray);

    //numArray.sort(function(a, b));
    //return a - b;
//splitting a string: "the quick brown fox jumped over the log"
let str = "the quick brown fox jumped over the log"
let words = str.split(" ");
console.log(words);

//joining an array
console.log(words.join(", "));
console.log(fruits.join(", "));