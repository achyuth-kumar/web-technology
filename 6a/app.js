const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function vowelCount(sentence) {
  sentence = sentence.toLowerCase()
  let count = {
    'a': 0,
    'e': 0,
    'i': 0,
    'o': 0,
    'u': 0,
  };
  let letters = sentence.split("")
  for (let letter of letters){
    if(letter in count){
      count[letter] = count[letter] + 1
    }
  }

  return count
}

rl.question("Enter string ", function (input) {
  let res = vowelCount(input);
  console.log(`a: ${res['a']}, e: ${res['e']}, i: ${res['i']}, o: ${res['o']}, u: ${res['u']}`);
});
