/*
 * Complete the letterAndletters function.
 * Print your output using 'console.log()'.
 */
function letterAndletters(s) {
    const vowels = s.match(/[aeiou]/gi);
    const consonants = s.match(/[^aeiou]/gi);

    for (const vowel of vowels) {
        console.log(vowel);
    }
    for (const consonant of consonants) {
        console.log(consonant);
    }
}

function main() {
    const s = "javascriptloops"
    letterAndletters(s);
}

main();