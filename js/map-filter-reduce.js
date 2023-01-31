(function(){
    "use strict";


const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];


    //q2
    let threeLangs = users.filter(function (user) {
        if (user.languages.length >= 3) {
            return true;
        } else {
            return false;
        }

    });
    console.log(threeLangs);

    //q3
    let emailsArray = users.map(function(user) {
         return user.email;
    });
    console.log(emailsArray);

    //q4
    let sum = users.reduce(function (total, user) {
        return total + user.yearsOfExperience;
    }, 0);
    console.log("Average years of experience: " + sum / users.length);

    //q5
    let longestEmail = users.reduce(function (longestEmailSoFar, user) {
        if (user.email.length > longestEmailSoFar.length) {
            return user.email;
        } else {
            return longestEmailSoFar;
        }
    }, "");
    console.log(longestEmail);


    //q6
    let usersString = users.reduce((string, user, i) => {
        if ( i < (users.length - 1) ) {
            return string + user.name + ', ';
        } else {
            return string + user.name + '.';
        }
    }, "");
    console.log("Your instructors are: " + usersString);





//a set will only allow unique entries
    /*
    //bonus
    let langArray = users.map(function(user) {
        return user.languages;
    });
    console.log(langArray);

    let langString = langArray.reduce((string, user) => {
        return `${string},${user}`;

    }, "");
    console.log(langString);


    let langs = langString.split(',');
    console.log(langs);

    function uniqueLang (lang) {

        const wordCountObject = langs.reduce((wordCounts, word) => {
            if (typeof wordCounts[word] === 'undefined') {
                // if the word is not yet present in our object, set it's value to 1
                wordCounts[word] = 1;
            } else {
                // otherwise increment the existing count
                wordCounts[word] += 1;
            }
            return wordCounts;
        }, {}); // start with an empty object
        return wordCountObject;
    }


    uniqueLang();
// {Mary: 1, had: 1, a: 1, little: 3, lamb: 3}

*/









})();