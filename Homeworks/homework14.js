/*
@Date:   Nov 13, 2020
@Author: Carlos Gonzalo Villas Velazquez

Homework Assignment #14: Callbacks and Promises

Details:    
    It's important that JS developers be able to navigate both callbacks and promises. 
    Even if you prefer promises, there is a lot of existing code written in callbacks, that you need to be able to understand
     (and work with effectively). As such, for this assignment you are to write the same functionality twice: 
     Once using callbacks and once using promises.

    Create two different scripts. One will contain the callback-centered code, and the other the promises-centered code. 
    The two scripts should contain the same functionality, and solve the same problems.

    Each script should expose a function that accepts one argument: an integer between 1 and 1000 called "num". 
    When that function is called, the following steps should happen for "num" in order:
        1. Calculate the square of num and log it to the console
        2. Wait "num" milliseconds
        3. Calculate the square root of num and log it to the console
        4. Determine the prime-number that is closest to num without being greater than or equal to num, and then log it to the console
        5. Count the total elapsed time from when the original function was called until the last step was completed,
        and log that to the console as well.

*/

function squared(num){
    let result = num * num;
    console.log(result)
}

function squareRoot(num){
    let result = Math.sqrt(num);
    console.log(result)
}

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return false;
        }
    }
    return value > 1;
}
function closestPrime(x){
    let lowerPrime
    let counter = 1;
    while(!(lowerPrime)){
      if(!lowerPrime){
        if(isPrime(x - counter)){
          lowerPrime = x - counter;
        }
      }
      counter++
    }
    console.log(lowerPrime);
  }

const { square } = require('mathjs');
const {performance} = require('perf_hooks');
var startTime, endTime;

function startTimer(num) {
    startTime = performance.now();
};
  
function EndTimer(num) {
    endTime = performance.now();
    var timeDiff = endTime - startTime; 
    var seconds = Math.round(timeDiff);
    console.log(timeDiff + " miliseconds");
}

function CallBack1(num, cb, cb2, cb3, cb4, cb5){
    cb4(num);
    cb(num);
    setTimeout(() => {
        cb2(num);
        cb3(num);
        cb5(num);
    },num)
}


CallBack1(1000, squared, squareRoot, closestPrime, startTimer, EndTimer);


function Promise1 (num, pf){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (pf(num));
        },num);
    });
}


const num1 = 1000;
Promise1(num1,squared).then(Promise1(num1,squareRoot)).then(Promise1(num1, closestPrime)).then(Promise1(num1,startTimer)).then(Promise1(num1,EndTimer));