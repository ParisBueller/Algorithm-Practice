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
  //Create an empty array to push odd numbers
  var odds = [];
  //Loop through num
  for(var i = 0; i<num.length; i++) {
    var currentNumber = i;
    currentNumber += i;
    //Check if the sum is even
    if(i % 2 == 0) {
     
    }
  }
  return num;
}