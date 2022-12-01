//oddNumber = prompt("Enter an odd number between 1 and 50");
let i = 0;
let valid = false;

while (!valid) {
    oddNumber = prompt("Enter an odd number between 1 and 50");
    if (oddNumber > 50 || oddNumber < 1) {
        alert(oddNumber + ' is an invalid entry.');
        continue;
    }
    if (oddNumber % 2 === 0) {
        alert(oddNumber + ' is an invalid entry.');
        continue;
    }
    if (isNaN(parseFloat(oddNumber))) {
        alert(oddNumber + ' is an invalid entry.');
        continue;
    }
    valid = true;
}

console.log('Number to skip is: ' + oddNumber);

for (i = 1; i < 50; i++) {
    if (i === parseFloat(oddNumber)){
        console.log("Yikes! Skipping number: " + oddNumber);
        continue;
    } else if (i % 2 === 1){
        console.log("Here is an odd number: " + i);
    }
}

