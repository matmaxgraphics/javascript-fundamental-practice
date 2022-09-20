//Creating a random insult generator using function. This is the first instance

/*const randomBodyParts = ["Face", "Nose", "Hair"];
const randomAdjectives = ["Smelly", "Boring", "Stupid"];
const randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

const randomWordPicker = function(words){
  const word = words[Math.floor(Math.random() * words.length)];
  return word;
}

const randomBodyPart = randomWordPicker(randomBodyParts);
const randomAdjective = randomWordPicker(randomAdjectives);
const randomWord = randomWordPicker(randomWords);

const randomInsult = `Your ${randomBodyPart} is like a ${randomAdjective} ${randomWord}`

console.log(randomInsult);*/

//The randomInsult can as well be stored into a function so multiple insults can be generated easily by just calling the function (calling function in fuction)

const randomWordPicker = function (words) {
  const word = words[Math.floor(Math.random() * words.length)];
  return word;
};

const randomInsultGenerator = function () {
  const randomBodyParts = ["Face", "Nose", "Hair"];
  const randomAdjectives = ["Smelly", "Boring", "Stupid"];
  const randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

  const randomInsult = `Your ${randomWordPicker(randomBodyParts)} is like a ${randomWordPicker(randomAdjectives)} ${randomWordPicker(randomWords)}`;

  return randomInsult;
};

console.log(randomInsultGenerator());
