// Loops
// Quick and easy way to do something repeatedly

// While
/*
let numberofLoops = 0;
while (numberofLoops<10) {
    console.log("I am looping!");
    numberofLoops +=1
};

let num1 = 0;
let num2 = 0;
while (num1<8){
    num1 +=1;
    console.log(num1);
    num2 +=2;
};

let condition;
do {
    const userInput = input("Enter q to exit");
    if (userInput === "q") {
        condition = false;
    } else {
        condition = true;
    }
} while (condition);
*/

// For loops 
// Repeat until a specified conditions evaluates to false
/*
  for(initial expression ; condition ; increment expression) {
    statement
  }

 */
const iceCreams = ["vanilla", "chocolate", "rocky road", "strawberry"];

function iceCreamLooper(arr, type) {
  for(var i = 0 ; i < arr.length ; i += 1) {
    if (arr[i] === type) {
      console.log(arr[i] + " " + "is at position: " + i);
    }
  }
}

 for(let i = 1 ; i <= 100 ; i += 1 ) {
   if (i % 15 === 0) {
     console.log("Fizzbuzz");
   }
   else if (i % 3 === 0) {
     console.log("Fizz");
   } 
   else if (i % 5 === 0) {
     console.log("Buzz");
   }
   else {
     console.log(i);  
   }
 }

 console.log("Starting loop!");
 outerLoop: 
 for(let i = 0 ; i < 10 ; i += 1) {
   console.log("Loop #" + i);
   innerLoop:
   for (let a = 0 ; a < 10 ; a += 1) {
     console.log("Inner loop #" + a);
     if (a === 3) {
       break innerLoop;
     }
     if (i === 5) {
       break outerLoop;
     }
   }
 }
 console.log("Finished loop");

 for(let i = 0 ; i < 10 ; i += 1) {
   setTimeout(() => {
     console.log(i);
   }, i * 500);
 }

// For...in loop 
/*
  Loop through an object's properties in arbitrary order
  Used for looping over object properties

 */

 const users = { a: "Sally", b: "Billy", g: "Ashley", x: "Timmy" };

 for(let prop in users) {
   if (users[prop] === "Sally") {
     users[prop] = "Unknown";
   }
   console.log(users[prop]);
 }


 const drinks = ["coffee", "sprite", "tea", "coke", "pepsi"];

 drinks.forEach((d) => {
   console.log(d);
 });



//For...of loop
/* 
  New loop in ES6 used to loop over iterable objects(arrays, strings,
  maps, sets, etc)
  For looping for data - like values in an array
 */

 const drinks = ["coffee", "sprite", "tea", "coke", "pepsi"];
 for(const d of drinks) {
   if (d === "tea") {
     continue;
   }
   console.log(d);
 }

 const myString = "🤖😓";
 for(const character of myString) {
   console.log(character);
 }

 const originalArray = [10, 15, 20, 25, 30];

 function numIncreaser(arr, numToIncBy) {
   for(let num of arr){
     num += numToIncBy;
     console.log(num);
   }
 }

numIncreaser(originalArray, 130);

const originalArray = ["Chris", "Chris", "Jane", "Sally", "Billy", "Billy", "Bob"];
const uniqueNameSet = new Set(originalArray);

for(const n of uniqueNameSet) {
  console.log(n);
}


