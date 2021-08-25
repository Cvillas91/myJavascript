//Switch

/*

switch(expression) {
    case value1:
        execute expression 1;
        break;
    case value2:
        execute expression2;
        break;
    ....
    default: 
        execute default
        break;
};

*/

const myFruit = "apple";

if (myFruit === "apple") {
    console.log("Awesome!");
} else if (myFruit === "orange"){
    console.log("Cool");
} else if (myFruit === "pear") {
    console.log("Great");
} else {
    console.log("Ok");
};

function fruitLogger(fruit){
    switch (fruit){
        case "apple":
            console.log("Awesome!");
            break;
        case "orange":
            console.log("Cool");
            break;
        case "pear":
            console.log("Great");
            break;
        default :
            console.log("Default case");
            break;
    };
};

fruitLogger("orange");

function fruitLogger2(fruit){
    switch (fruit){
        case "apple":
        case "orange":
        case "pear":
            console.log("Great Its a fruit");
            break;
        default :
            console.log("Default case");
            break;
    };
};

fruitLogger2("orange");