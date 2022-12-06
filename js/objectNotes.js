"use strict";


    let rey = Object();
    console.log(rey);

    //declare new object w just {}
    rey = {};
    console.log(rey);
    //dynamically assign som properties using dot notation
    rey.petType ="dog";
    rey.breed = "german shepherd";
    console.log(rey);

    //use array notation
console.log(rey.breed); //do this for now
console.log(rey["breed"]); //not this

    rey.breed = "chihuahua";
    rey.gender = "female";

//declare an object with a few properties
const dolly = {
    name: "Dolly",
    gender: "female",
    breed: "american bulldog"
}

//add a property to the object dynamically
dolly.petType = "dog";
console.log(dolly);

//put an object in another object
const candy = {
    name: "Candy",
    age: "2",
    petType: "dog",
    gender: "female",
    breed: "pug",
    owner: {
        name: {
            first: "Joe",
            last: "Schmoe"
        },
        address: "555 Sesame St.",
        phone: "210 555 1212"
    }
};
console.log(candy);
//and access the nested object
console.log(candy.owner.name);

//array of pets and access the
const pets = [];
pets.push(rey);
pets.push(dolly);
pets.unshift(candy);

rey.name = "Rey";

console.log(pets);
console.log(pets[1]);

//array of candys fav toys
candy.favoriteToys = [
    "tennis ball",
    "stick"
];
console.log(pets[0].favoriteToys [1]);


//make a function
function doDogStuff(myPets) {
    for (const petIndex in myPets) {
        const pet = myPets[petIndex];
        if (pet.favoriteToys === undefined) {
            console.log("calling ASPCA...")
        } else {
            console.log(pet.favoriteToys);
        }
    }
}

//tyler gives his dog a rock
rey.favoriteToys =["rock"];

doDogStuff(pets);


//objects can also have behavior
rey.sit = function () {
    console.log(this.name +" sits");
}
rey.sit();
//this sit function only belongs to Rey, so will not work for candy
//candy.sit();
//can declare the function outside of everything and then call it with each dog

//refers to the thing that the function belongs to (or )
//done in rey.sit function
candy.sit = rey.sit;
candy.sit();

console.log(pets);



const red1 = {
    make:"chevy",
    model: "corvette",
    honk: function () {
        console.log("the " + this.model + " says beep beep");
    }
}
const blueCar = {
    make:"dodge",
    model: "charger",
    honk: function () {
        console.log("honk honk");
    }
}

red1.honk();
blueCar.honk();








