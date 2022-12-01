

//For Loops
//Q2
function showMultiplicationTable(x) {
    for (let i = 1; i <= 10; i++) {
        console.log(x + ' * ' + i + ' = ' + (x * i));
    }
}
showMultiplicationTable(7);

//Q3

for (let i = 1; i <= 10; i++) {
    let randomNumber = Math.floor(Math.random() * 200) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even');
    } else {
        console.log(randomNumber + ' is odd');
    }
}

//Q4
for (let i = 1; i < 10; i++) {
    for (let j = 1; j <= i; j++){
        console.log(`${i}` .repeat(i));
    }
}


//Q5
for (let i = 100; i >= 0; i -= 5) {
        console.log(i);
    }
