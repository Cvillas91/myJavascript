
//Numbers
console.log(10*5);
console.log(Math.PI);
console.log(parseInt(10)+213);
console.log(+"10");
console.log(isNaN(10));

//Strings
//Sequences of Unicode Characters
console.log("Hello");
console.log("SuperDuper".length);
console.log("Carlos".charAt(0));
console.log("Hello " + "World" + "!");
console.log("I want to be uppercase!!".toUpperCase());

//Booleans
console.log(true);

var shouldbeTrue = true;
var shouldbeNull = null;
console.log(shouldbeTrue===false);
if (shouldbeNull === true){
    console.log("Hello");
}
else{
    console.log("This value is not true");
}
var isZero = 0;
console.log(Boolean(isZero));

var myArray =  [1,2,3];
console.log(Boolean(myArray));


//Objects
//Collections of name-value pairs
//Each key should be unique

//var myName = {1:"Carlos"};
//console.log(myName);

var myObject = new Object();
myObject['1'] = "Carlos";
myObject['2'] = "Sally";
myObject['3'] = "Bob";

console.log(myObject);

var myOtherObject = {};
myOtherObject = {
    1:"Carlos",
    2:"Louise",
    3:"Chispa",
}
myOtherObject['4'] = "Camara";
console.log(myOtherObject);

var anotherObject ={
    firstName : "Carlos",
    lastName : "Villas",
    age : 50,
    phone_numbers:{
        home : "444-4444-444",
        office: "444-4444-433",
    } ,
    address : "1,2,3 Fake Street",
    sayHi : function(){
        console.log("Hi");
    },
}
console.log(anotherObject.phone_numbers.office);
anotherObject.sayHi();


var donut = {
    type:"sprinkles",
    glazed: true,
    hasChocolate: false,
    sweetness: 10,
    sayType: function() {
        console.log("Type: " + this.type);
    },
    showSweetness: function() {
        console.log("Sweetness: " + this.sweetness + "/10");
    },
};
donut.showSweetness()

//Constructor pattern for creating objects
function DonutConstructor(type, glazed, hasChocolate, sweetness) {
    this.type = type;
    this.glazed = glazed;
    this.hasChocolate = hasChocolate;
    this.sweetness = sweetness;
    this.sayType = function() {
        console.log("Type : " + this.type);
    };
    this.showSweetness = function() {
        console.log("Sweetness: " + this.sweetness + "/10");
    };
}

var coconutDonut = new DonutConstructor("coco",true,false,6);
console.log(coconutDonut);
coconutDonut.sayType();

//Arrays
//Collection of data
var myArray = [1,2,3,"asdad","asdded",true];
//console.log(myArray.length);

var myArray2 = new Array();
myArray2[0] = "Carlos";
myArray2[1] = "Newt";
myArray2.push(["Louise","Sally"]);
console.log(myArray2[2]);

var sortedArray = myArray2.sort();
var concatArray = myArray2.concat(myArray);
//console.log(concatArray);
var slicedArray = concatArray.slice(5,7);
console.log(slicedArray);
