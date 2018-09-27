//Map the Debris
//Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  //create an empty array to push our transformed object to
  let debris = [];
  let a = 2 * Math.PI;

  //Create a function that gets the orbital period
  //of the debris object passed in arr
  const getOrbPer = (obj) => {
    //c is earthRadius + the object average altitude cubed
    let c = Math.pow(earthRadius + obj.avgAlt,3);
    //b is the square root of c divided by earths GM(standard gravitational paramater)
    let b = Math.sqrt(c / GM);
    //orbPer is the calculated orbital period rounded to the nearest whole number
    let orbPer = Math.round(a * b);
    //delete our avgAlt object key 
    delete obj.avgAlt;
    //add our new object key orbital period and its value
    obj.orbitalPeriod = orbPer;
    return obj;
  }
  //loop through the elements in arr and push them to our empty array
  for(let elem in arr) {
    debris.push(getOrbPer(arr[elem]));
  }
  //return our new array
  return debris;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


//Make a person
//Fill in the object constructor with methods that will
//build a persons name using the passed paramaters
var Person = function(firstAndLast) {
  //create a variable that is a copy of the firstAndLast paramater
  let fullName = firstAndLast;
  //get the first Name by splitting the full name at the space " "
  //and indexing the first name[0]
  this.getFirstName = () => {
    return fullName.split(" ")[0];
  };
  //get the last name by splitting the full name at the space " "
  //and indexing the last name[1]
  this.getLastName = () => {
    return fullName.split(" ")[1];
  };
  //get the full name by returning fullName, which 
  //we set to the firstAndLast paramater at the top^
  this.getFullName = () => {
    return fullName;
  };
  //set the first Name by setting fullName to the indexed
  //name and concatenating the passed name paramater
  this.setFirstName = (name) => {
    fullName = name + " " + fullName.split(" ")[1];
  };
  //set the last Name by setting fullName to the indexed
  //name and concatenating the passed name paramater
  this.setLastName = (name) => {
    fullName = fullName.split(" ")[0] + " " + name;
  }
  // set the full name by setting the fullName to the passed name paramater
  this.setFullName = (name) => {
    fullName = name;
  }
  return firstAndLast;
};

let bob = new Person('Bob Ross');
bob.getFullName();

//Arguments Optional:Create a function that sums two arguments together. 
//If only one argument is provided, then return a function that expects
//one argument and returns the sum.

function addTogether() {
  //create a function to check if the argument is a number
  //if not, return undefined
  let checkNum = (num) => {
    if(typeof num !== 'number') {
      return undefined;
    } else {
      return num;
    }
  };

  //Check if we have two argument paramaters,
  if(arguments.length > 1) {
    let a = checkNum(arguments[0]);
    let b = checkNum(arguments[1]);
    //If the arguments passed return as undefined, return undefined.
    //Otherwise, add them and return the sum.
    if(a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    //If only one argument paramater is passed, return a new function that expects two paramaters
    let c = arguments[0];

    if(checkNum(c)) {
      return (arg2) => {
        //Check for non-numbers again
        if(c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          // If numbers add them and return sum
          return c + arg2;
        }
      };
    }
  }
}

addTogether(2,3);



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

//Flatten a nested array
function steamrollArray(arr) {
  // Empty array variable to push 
  var newArray = [];
  flatten(arr);
  function flatten(arr) {
    //Iterate through each instance in arr
    arr.forEach(function(arr2) {
      //Check if current arr is an array
      //if it is not, push it to newArray
      if(!Array.isArray(arr2)) {
        newArray.push(arr2);
      }
      // else, run our flatten function
      else {
        flatten(arr2);
      }
    });
  }
  return newArray;
}

//Binary Agents - Return an English translated sentence of the passed binary string
function binaryAgent(str) {
  //seperate binary code for conversion
  biString = str.split(" ");
  //empty array to push converted binary
  uniString = [];
  //loop through our split binary code
  for(i = 0; i < biString.length; i++) {
    //convert to decimal with parseInt
    uniString.push(String.fromCharCode(parseInt(biString[i],2)));
  }
  //rejoin and return our converted binary
  return uniString.join('');
}

//Everything Be True - Check if the predicate(second argument) 
//is truthy on all elements of a collection (first argument) 
function truthCheck(collection, pre) {
  //set counter variable
  var counter = 0;
  //check for each object
  for(var c in collection) {
    //check if it has the property and is true
    if(collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  //check to see if it is truthy and return true or false
  return counter == collection.length;
}

//FrankenSplice
//Use array methods slice and splice to copy each element
//of the first array into the second array, in order
function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  let copy = arr2.slice();

  for(let i = 0; i < arr1.length; i++) {
    copy.splice(n, 0 , arr1[i]);
    n++
  }
  return copy;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);