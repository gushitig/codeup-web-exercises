(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ["Tig", "Nova", "Neptune", "Bambino"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("---------");
    for (let i = 0; i < names.length; i++){
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("---------");
    names.forEach(function (name ) {
        console.log(name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    console.log("---------");
    console.log("First element");
    function printFirst(name, index) {
        //escape early if we see the first element
        if (index === 0) {
            console.log(`${index + 1}. ${name}`);
        }
    }
    names.forEach(printFirst);

/* instructor version
const myArray = [1, 2, 3, 4, 5];
function first(anArray) {
    return anArray[1];
    }
 */

    console.log("---------");
    console.log("Second element");
    function printSecond(name, index) {
        //escape early if we see the second element
        if (index === 1) {
            console.log(`${index + 1}. ${name}`);
        }
    }
    names.forEach(printSecond);


    console.log("---------");
    console.log("Last element");
    function printLast(name, index) {
        //escape early if we see the last element
        if (index === (names.length - 1)) {
            console.log(`${index + 1}. ${name}`);
        }
    }
    names.forEach(printLast);

    /* instructor version
    const myArray = [1, 2, 3, 4, 5];
    function first(anArray) {
        return anArray[anArray.length - 1];
    }
 */

})();