/*
@Date:   Thursday Oct 8 2020
@author: Carlos Gonzalo Villas Velazquez
@Place:  Warsaw, Poland

Homework Assignment #2: Variables and Constants

Details:
    What are the differences between let, const and var? 
    When would each be appropriate too use? 
    In your own words, write 1 - 2 paragraphs explaining the different use-cases for each. 
    If English is not your native language, feel free to write in whatever language you prefer. 
    Just please note which language it is at the top of the assignment, so we know how to translate it.
    Create a file called variables.js and add your explanation as comments at the top of the page.
    Then, within the document write 3 code examples (1 for var, 1 for const and 1 for let) showcasing the use-cases you explained above.


Extra Credit:
    To earn extra credit, add an explanation of "hoisting" to the top of your document. What is hoisting? 
    What does the word mean, and how does hoisting work in Javascript?
*/

/*
In JavaScript, there are two kinds of scope - global scope, and function scope.
var declarations are scoped globally but let and const are block scoped, these variables can be updated and re-declared within its scope.
let variables can be updated but not re-declared, this variables are scoped within their own block.
const variables can neither be updated nor re-declared, we could have two const variables with the same name if they are in different scopes
Hoisting: This is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.
*/

//Example var
var variableVar1 = "I am a variable var";
console.log(variableVar1);

//Example let
if (true){
    let variableLet1 = "I am a variable let";
    console.log (variableLet1); //This can be accesed as it is scoped within this block
    console.log (variableVar1); //This can be accesed as it is scoped globally
};
//console.log(variableLet1) //This will return an error as this variable was defined in 'if' block before, can not be accessed outside that block

//Example const
const variableConst1 = "I am a variable const"
console.log(variableConst1);
//variableConst1 = "Hello there" //Cant be reasigned in the global block

if (true){
    const variableConst1 = "I am a variable const but reassigned";
    console.log (variableConst1); //This can be accesed as it is scoped within this block
    console.log (variableVar1); //This can be accesed as it is scoped globally
};

console.log (variableConst1); //Reasignment is not applied here as the reassignment happened inside the 'if' block.