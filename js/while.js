
//while loops
i = 1;
while (i < 65535) {
    console.log(i*2);
    i = i * 2;
}



//do while
/*
// This is how you get a random number between 50 and 100
let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;
let perCustomer = Math.floor(Math.random() * 5) + 1;

do {
    console.log( `${perCustomer} cones sold...`);
    if (perCustomer > allCones) {
        console.log(`I cannot sell you ${perCustomer} cones, because I only have ${allCones} left`);
    } else if (allCones === 0) {
        console.log( `Yay! I sold them all!`);
        } else {
            console.log( `I can sell you ${perCustomer} cones, and I  have ${allCones} left`);
        }
    allCones = allCones - perCustomer;
    } while (allCones >= 0)
*/




const max = 100;
const min = 50;
let coneInventory = Math.floor(Math.random() * (max - min + 1 ) + min);

console.log(`I have ${coneInventory} cones to sell.`);
do {
    const maxPerSale = 5;
    const minPerSale = 1;
    let conesSold = Math.floor(Math.random() * (maxPerSale - minPerSale + 1 ) + minPerSale);
    if ( conesSold <= coneInventory) {
        coneInventory -= conesSold;
        console.log( `I can sell you ${conesSold} cones, and I  have ${coneInventory} left`);
    }
} while (coneInventory > 0);
console.log( `Yay! I sold them all!`);











