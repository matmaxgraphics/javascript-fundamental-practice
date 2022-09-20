const words = [
    'javascript',
    'monkey',
    'amazing',
    'pancake'
];

const word = words[Math.floor(Math.random()*words.length)];

const answerArray = [];
for (let i = 0; i<word.length; i++){
    answerArray[i] = "_";
}

const remainingLetters = word.length;