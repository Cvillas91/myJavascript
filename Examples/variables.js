var myName = "Carlos";
var myLastName = "Villas";
var myFavNum = 11
var myArray = [1,2,3,"Bob",5];
var myObject = {
    name : "Chris",
    age : 30,
};

console.log(myName);
console.log(myLastName);
console.log(myFavNum);
console.log (myArray);
console.log(myObject);

function sayHi(){
    console.log("Hi" + " " + myName);
};

sayHi();


var count = 1;

function increase(){
    count +=1;
    console.log(count)
}

increase();
increase();

var amINull = null;
console.log(amINull);


function sayHi(){
    var shouldSayHi = true;

    if (shouldSayHi === true){
        var myName = "Carlos";
        console.log("Hi " + myName)
    }
}

const myArray = [1,2,3];
console.log(myArray);
myArray.push(5);
console.log(myArray);