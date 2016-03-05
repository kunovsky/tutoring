
// for loops, while loops, functions, if else statements, data structures (arrays, objects)
// http://eloquentjavascript.net/Eloquent_JavaScript.pdf


function greeter(name) {
  console.log("Hi " + name);
}

 // greeter("Ty")

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

 // console.log(reverseWordsInString(myString));


function mostCommonCharacter(str) {
  //create a container to hold the number of occurances for each number in the string
  // loop over the string for esch chsracter in the string 
  // check to see if that character exists in the container
  // if it does exist, add 1 to the amount
  // if it doesn't exist set that character's amount = to 1
  var results = {},
      greatest = 0,
      greatestLetter = '';

  for(var i = 0; i < str.length-1; i ++) {
    if(results[str[i]]) {
      results[str[i]] +=1; // {H: 1, A: 1}
    }
    else {
      results[str[i]] = 1;
    }
  }
  Object.keys(results).map(function(letter) {
    if (results[letter] > greatest) {
      greatest = results[letter];
      greatestLetter = letter;
    }
  });
  return greatestLetter;
}

var myString = 'HAPPY BIRTHDAY TO YOUUUUUUU';
// console.log(mostCommonCharacter(myString));


function firstNonRepeatChar(str) {

}

function removeDuplicateChar(str) {

}

function isPalindrome(str){
  return str === str.reverse();
}

// console.log(isPalindrome('radar') === true)
// console.log(isPalindrome('12321') === true)

function isPrime(n) {

}

function rand7(){

}

function findIndex(values, target) {

}

function fizzBuzz(num) {
  for(var i = 1; i < (num ); i++){
    if(i % 15 === 0 ) {
      console.log('fizzBuzz');
    }
    else if(i % 3 === 0) {
      console.log('Fizz');
    }
    else if( i % 5 === 0){
      console.log('Buzz');
    }
    else {
      console.log( i );
    }
  }
}

// fizzBuzz(10)


function buildTriange(num) {
  var triangle = "";

  for(var i = 1; i < num; i++){

    for(var x = 1; x <= i; x++) {
      triangle+= "#";
    }
    triangle += '\n';
  }
  console.log(triangle);
}

// buildTriange(7)

var Person = function(name, age, color) {
  this.name = name;
  this.age = age;
  this.favColor = color;
}

Person.prototype.speakName = function() {
  console.log("My name is " + this.name);
  return this.name;

};Person.prototype.changeName = function(name) {
  this.name = name;
};

var tyler = new Person("Tyler", 13, "blue");

console.log(tyler.speakName());
console.log(tyler.changeName("Ty"));
console.log(tyler.speakName());






