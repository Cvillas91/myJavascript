// Functions
/*
;var userName = "Carlos";

function sayHi(userName){
    console.log("Hi",userName);
};

sayHi(userName);

function numDoubler(num){
    const doublevalue = num*2;
    return doublevalue;
};

const numTwoDoubled = numDoubler(4);
console.log (numTwoDoubled);

const squaredNumber = function(num){
    return num*num;
};

const numberAdder = function(squarer,num2){
    const squared = squarer(4);
    return squared + num2
};

console.log(numberAdder(squaredNumber,10));

let myNumber = 100;

function addTwenty(num){
  return num+20;  
};

console.log(addTwenty(myNumber));
console.log(myNumber);

const myInfo = {name:"Carlos", age:30};

function changeAge(myObject){
    myObject.age = 100;
}

console.log(myInfo);
changeAge(myInfo);
console.log(myInfo);


//Closure

function squareAndMultiplies(num1,num2){
    
    function squarer(x){
        return x * x ;
    };

    return squarer(num1) *squarer(num2);
};
 console.log(squareAndMultiplies(2,4));


 //Arrow Functions
 var sayHi = () => {
     console.log("Hi");
 }

 const users = [
     {name: "Carlos", age: 30},
     {name : "Louise", age: 26},
 ];

 const userNameList  = users.map(function(user) {
     return user.name;
 });

const userNameList2 = (myArray) => myArray.map((user) => {
    return user.name;
});

 console.log(userNameList2(users));

 const multiplier = (x,y) => x*y;
 console.log(multiplier(2,3));

 const squarer  = num => num * num;
 console.log(squarer(100));



const numbers = [1,2,3,4,5,6,7,8,9,10];

const filteredNumbers = numbers.filter((num) => 
    num % 2 == 0
);

const numberDoubler = (num) => {
    const numbContainer = [];
    num.forEach((n) => {
        const doubled = n*2;
        numbContainer.push(doubled);
    });
    return numbContainer;
};

console.log(numberDoubler(numbers));

function numberMultiplier (x,y){
    x =x || 5;
    y = y || 10;
    return x*y;
};

//Another way

function numberMultiplier2 (x = 5,y = 10){
    return x*y;
};

console.log(numberMultiplier(NaN,9));

const bankAccount = {
    canSpendMoney: true,
    balance : 100
};

function purchaseItem (price, acct = bankAccount){
    if(acct.canSpendMoney){
        acct.balance -= price;
        if (acct.balance <= 0) {
            acct.canSpendMoney = false;
         };
         return true;
    } else {
        return false;
    };
};

console.log (purchaseItem(90));

function multiplier (multiplier, ...nums){
    return nums.map((n) => multiplier * n);
};

console.log(multiplier(10,5,4,3,14,5,17,0));
*/