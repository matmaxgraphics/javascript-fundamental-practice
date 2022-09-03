const stringGenerator = function (length){
  let result = ' ';
  const alphabetsLength = alphabets.length;
  for (let i = 0; i < length; i++){
    result += alphabets.charAt(Math.floor(Math.random() * alphabetsLength));
  }
  return result;
}

console.log(stringGenerator(5));