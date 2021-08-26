/*
@Date:   Friday Oct 9 2020
@author: Carlos Gonzalo Villas Velazquez
@Place:  Warsaw, Poland

Homework Assignment #3: Statements and Operators

Details:

    Let's look at a popular logical argument (a syllogism)
        All men are mortal
        Socrates is a man.
        Therefore, socrates is mortal.

    Using "if statements" and any other logical operators and data-types you see fit, recreate this logical argument. 
    Your code should make clear that "socrates" is part of a collection of items referred to as "men", 
    and that all members of this collection are mortal. 
    You should also then demonstrate that since Socrates is part of this collection, 
    it follows that he is mortal as well.

Extra Credit:

    Got the hang of creating a logical argument? Want to try another one? Try this one as well:
        This cake is either vanilla or chocolate.
        This cake is not chocolate.
        Therefore, this cake is vanilla.
*/

var objectPerson = {
    name : "Socrates",
    man : true,
};

const allMenMortal = true

if (allMenMortal === true){
    console.log("All men are mortal");
    if (objectPerson.man === true && objectPerson.name === "Socrates"){
        console.log(objectPerson.name + " is a man");
        if (true){
            console.log(objectPerson.name + "  is mortal \n");
        };
    }else {
        console.log(objectPerson.name + " is not Socrates or is not a man \n");
    };
};


//Extra Credit
var objectThing = {
    thing : "cake",
    chocolate : true,
};

if (objectThing.thing === "cake"){
    console.log("This cake is either vanilla or chocolate");
    if (objectThing.chocolate === false){
        console.log("This cake is not chocolate");
        if (true){
            console.log("Therefore this cake is vanilla");
        };
    }else if (objectThing.chocolate === true){
        console.log("This cake is not vanilla");
        if (true){
            console.log("Therefore this cake is chocolate");
        };
    };
};
