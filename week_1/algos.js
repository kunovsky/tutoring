
// for loops, while loops, functions, if else statements, data structures (arrays, objects)
// http://eloquentjavascript.net/Eloquent_JavaScript.pdf


function greeter(name) {
  console.log("Hi " + name);
}

 greeter("Ty")

function reverseString(str) {
  //  declare variable using "var keyword"
  // using a "for loop" we loop over the input string
  // next we index into string "[]"
  // get the letter and add to the result
  // we must return our variable
  var results = "";
  for(var i = str.length-1; i >= 0; i --) {
    results  = results + str[i];
  }
  return results;
}

function reverseWordsInString(str) {

  // split these words on an empty space
  // for each word go through and reverse the word
  // return the result
  var words = str.split(" ");
var results = "";
  for(var i = 0; i< words.length; i ++) {
    results = results + reverseString(words[i]);
results += " "
  }
  return results;


}
 var myString = "reverse the words in this string";

 console.log(reverseWordsInString(myString));


function mostCommonCharacter(str) {

}

function firstNonRepeatChar(str) {

}

function removeDuplicateChar(str) {

}

function isPalindrome(str){

}

function isPrime(n) {

}

function rand7(){

}

function findIndex(values, target) {

}
