"use strict";
(async function(){


//handle an api promise
    function lastCommitDate(username) {
        return fetch(`https://api.github.com/users/${username}/events/public`, {
            headers: {
                'Authorization': 'token ' + GITHUB_API_KEY
            }
        })
            .then(function(result) {
                return result.json();
            })
            .then(function (data) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].type === "PushEvent") {
                        return data[i].created_at;
                    }
                }
                //not reliable bc there were other event types
                /*console.log(data);
                console.log(data[0].created_at);
                return data[0].created_at;*/
                //soooo you can filter by event type then call the first [0]

                /*return data.filter(function(event) {
                    return event.type === "PushEvent";
                })[0].created_at;*/
                //return Promise.reject("yay failure");
            });

    }

    const commitDate = await lastCommitDate("gushitig");
    console.log(commitDate);







//CREATE YOUR OWN PROMISE
    function wait(number) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve('i waited ' + number + ' ms.');
            }, number);
        });
    }

    wait(1000).then((msg) => console.log(msg));
    wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

})();