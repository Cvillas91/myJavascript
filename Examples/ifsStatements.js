// If statement
// Tells the code: if this thing is true, run more code
/*
const shouldSayHi = true

if (shouldSayHi === true){
    console.log("Hi there!");
}

const numberFive = 5;
console.log(typeof numberFive);

const stringFive = "5";
console.log(typeof stringFive);

const stringConversion = parseInt(stringFive);

console.log(numberFive === stringFive); //Exact comparison
console.log(numberFive == stringFive); //Converts to number
console.log(numberFive + stringFive); //Concatenates to string
console.log(numberFive === stringConversion);
console.log(numberFive + stringConversion);

const myArray = [1,2,3];
var myOtherArray = [1,2,3];

console.log(myArray === myOtherArray);
console.log(myArray == myOtherArray);

myOtherArray = myArray;
console.log(myArray == myOtherArray);

const myObject = {name:"Carlos"};
const myOtherObject = myObject;
console.log(myObject == myOtherObject);

var cost1 = 120;
var cost2 = 123;

console.log(cost1 !== cost2);
*/
const bankAccountBalance = 10;
const costOfItem = 123;
const canSpendMoney = false;

if (bankAccountBalance >= costOfItem && canSpendMoney === true){ //&& = and
    console.log("You can purchase this item!");
}

hasCredit = false

if (bankAccountBalance >= costOfItem || hasCredit === true){ //&& = or
    console.log("You can purchase this item!");
} else if (canSpendMoney === true){
    console.log("You can purchase this item!");
} else {
    console.log("You cannot purchase this item!");
}