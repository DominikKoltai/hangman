const prompt = require('prompt-sync')();
const countriesCapitals = require('./countries-and-capitals');
const capitals = countriesCapitals.map(e => e.city);
const countries = countriesCapitals.map(e => e.country);


function play(word, lives) {
    word = capitals[Math.floor(Math.random() * capitals.length)];
    return word;
}
play();
let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}

let remaininLetters = word.length;

while (remaininLetters > 0) {
    console.log(answerArray.join(" "));
    let guess = prompt("Guess a letter!");
    if (guess == null) {
        break;
    } else if (guess.length !== 1) {
        console.log("Please enter a single letter!");
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remaininLetters--;
            }
        }
    }
}
console.log(answerArray.join(" "));
console.log("Good job! The answer was " + word);