'use strict';

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        let splitString = s.split("");
        let reversedArray = splitString.reverse();
        let reversedString = reversedArray.join("");
        console.log(reversedString);
    }

    catch (e) {
        console.log(e.message);
        console.log(s);
    }
}


function main() {
    const s = Number("1234");

    reverseString(s);
}

main();