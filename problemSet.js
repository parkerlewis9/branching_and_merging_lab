
//HIIIIIIII

//Hello

//Hello again.

//GOOD DAY, SIR.
function frameYourPhrase(phrase) {
   /*
     TODO: Write a function that takes a string like "Hello World!" and
     returns the string as a framed phrase like:
     **********
     * Hello  *
     * World! *
     **********

     Pay attention to the spacing.  The box should be a square.  In other words,
     the longest word in the phrase will dictate the size of the box.
   */  
   return "**********\n* Hello  *\n* World! *\n**********";
}

function frameYourPhrase(phrase) {
    var frameLong = "";
    var phraseToStun = ""
    for (var i = phrase.length + 2; i > 0; i--){
      frameLong+= "*";
    }
    
    return frameLong + " \n*" + phrase + "*\n" + frameLong;
};
console.log(frameYourPhrase("Parker is Awesome!"));






//----------------------------------------------------------------------
function isPrime(num) {
    /*
      TODO: Write a functiont that decides if the integer number provided
      is prime.  In other words, the number is only divisible by 1 and
      itself.  Example of primes are 2,3,5,7,11,13,17,etc.

      If this is too challenging, hard code the first 15 prime numbers and
      return true if the number is in the list.
    */
    if (num === 2) {
      return true;
    }
    for (var i = 2; i < num/2; i++) {
      var isPrime = true;
      if(num % i === 0) {
        return false;
      };
      return isPrime;
    }
}


console.log(frameYourPhrase("Hello World!"));
console.log(frameYourPhrase("This should print a new box!"));

if (isPrime(5)) {
    console.log("5 is Prime");
} else {
    console.log("You made an error, 5 should be prime");
}

if (isPrime(13)) {
    console.log("13 is Prime");
} else {
    console.log("You made an error, 13 should be prime");
}

if (isPrime(10)) {
    console.log("You made an error, 10 is not Prime");
} else {
    console.log("10 is divisible by 2 and 5");
}

