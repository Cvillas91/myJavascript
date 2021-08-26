/*
@Date:   Saturday Oct 10 2020
@author: Carlos Gonzalo Villas Velazquez
@Place:  Warsaw, Poland

Homework Assignment #4: Functions

Details:
 
    Let's go back to your syllogism (logical argument) examples from Homework #3. 
    Now it's time to turn those loose bits of logic into functions. 
    Rather than having procedure that demonstrates that Socrates is mortal, you should create a function that accepts 
    a name and returns a boolean (True or False) representing whether that name identifies a man who is mortal or not. 
    Your function to gracefully handle unexpected inputs (such as an unrecognized name or a name that is a not a string at all)
    without throwing an exception.

Extra Credit:

If you did the extra credit on Homework #3, let's turn that example into a function as well. 
It should accept in 2 arguments:
1. An array of all cake possibilities (vanilla or chocolate)
2. A boolean representing whether or not the cake is chocolate.
It should return a string indicating the actual flavor of the cake.

*/

function Syllogism1(inputPerson = "Socrates"){
    var arrayKnowGods = ["Zeus","Hades","Odin","Ra","Loki","Thor","Poseidon"];
    if(arrayKnowGods.includes(inputPerson.toString())) { 
        console.log("He is no mortal, but a God!");
        return false;
    } else if (inputPerson.toString() === "Socrates"){
        console.log("Socrates is definitively mortal, as proven in the last homework...");
        return true;
    } else {
        console.log("Probably mortal, but surely ain't Socrates");
        return true;
    };
};

console.log(Syllogism1(true));

flavorArray = ["chocolate","vanilla"];

//Extra Credit
function Syllogism2(inputArray = flavorArray,inputBoolean = true){
    if (inputBoolean) {
        return "chocolate";
    } else {
        return "vanilla";
    };
};

console.log(Syllogism2(flavorArray,false));