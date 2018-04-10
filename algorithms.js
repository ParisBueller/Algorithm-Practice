//Convert HTML Entities
function convertHTML(str) {
  //chain replace method with different arguments
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');
             
  return str;
}


//Convert a string to spinal case
function spinalCase(str) {
  //Create a regular expression selecting whitespaces and underscores
  var regularExpression = /\s+|_+/g;
  //Inserts a space between any encountered Upper-Case characters at the nth parenthesized submatch string
  str = str.replace(/([a-z])([A-Z])/g,'$1 $2');
  //Places a dash where spaces and underscores are, as defined in our regularExpression.Then converts the string to lowercase  
  return str.replace(regularExpression,'-').toLowerCase();
}


//Sum all Odd Fibonacci Numbers
function sumFibs(num) {
  //Create variables to keep track of the current and previous numbers
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;
  //Iterate through num using a while loop
    while(currNumber <= num) {
      //Check if the current number is even
      if(currNumber % 2 !== 0) {
        //If even, add it to our result variable
        result += currNumber;
      }
      //Get the next number and swap values after
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
      
    }
  return result;
}


//Sum all Primes
function sumPrimes(num) {
  var res = 0;
  //Create a function to find the prime numbers up to 'max'
  function findPrimes(max) {
    //Create variables for our loops and empty arrays to .push to
    var sieve = [];
    var i;
    var j;
    var primes = [];
    //Loop through max starting at 2(first prime number) 
    for(i = 2; i <= max; ++i) {
      //If not(!) a sieve number..
      if(!sieve[i]) {
        //Push i to the primes array
        primes.push(i);
        
        for(j = i << 1; j<=max; j+=i) {
          //add other numbers(non primes) to sieve array
          sieve[j] = true;
        }
      }
    }
    return primes;
  }
  //Add the primes
  var primes = findPrimes(num); 
    for(var p = 0; p < primes.length; p++) {
      res += primes[p];
    }
  
    return res;
}

//Smallest Common Multiple
function smallestCommons(arr) {
  //Sort arr
  arr.sort(function(a,b) {
    return b - a;
  });
  //Create a new array to add all values greater to smaller from arr
  var newArray = [];
  //Create a descending for loop iterating through the numbers in arr
  for(var i = arr[0]; i >=arr[1]; i--) {
    //Push values to newArray
    newArray.push(i);
  }
  //Global variables
  var quot = 0;
  var loop = 1;
  var n;
 //Create a do while loop 
  do {
    quot=newArray[0] * loop * newArray[1];
    for(n=2; n < newArray.length; n++) {
      //Check for a remainder
      if(quot % newArray[n] !== 0) {
        break;
      }
    }
    
   loop++;
  }  while (n !== newArray.length);
  
  
  return quot;
}

//Finders Keepers
function findElement(arr, func) {
  //Filter through array 'arr' adding only true values of 'func' to var num
  var num = arr.filter(func);
  //Check if num has any true values
  if(num.length > 1){
  return num[0];
  }
  //Returns undefined if entire array was false
  return undefined;
} 

//Drop it
function dropElements(arr, func) {
  // while our function returns false at zero index
  while(!func(arr[0])) {
    //shift until true
    arr.shift();
  }
  return arr;
}