(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    //var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    let planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */
    console.log(planetsArray.join(" <br> "));

    /* BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    // function htmlString {
    //     let htmlString = "";
    //     for (let i = 0; i < planetsArray.length; i++){
    //         if (i === 0) {
    //             console.log(`<ul><li> ${planet}`);
    //         } else if (i === (planetsArray.length -1)){
    //             console.log(`${planet} </li></ul> `);
    //         } else if (i > 0 || index < (planetsArray.length -1)){
    //             console.log(planetsArray.join("</li> <li>"));
    //         }
    //         result
    //     }
    // }

    // planetsArray.forEach(function (planet, index) {
    //     if (index === 0) {
    //         console.log(`<ul><li> ${planet} </li>`);
    //     } else if (index === (planetsArray.length -1)) {
    //         console.log(`<li>${planet} </li></ul> `);
    //     } else if (index > 0 || index < (planetsArray.length -1)){
    //       console.log(planetsArray.join("</li> <li>"));
    //     }
    // });










})();