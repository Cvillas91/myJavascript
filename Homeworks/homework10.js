/*
@Date:   Tuesdat Nov 03, 2020
@author: Carlos Gonzalo Villas Velazquez
@Place:  Warsaw, Poland

Homework Assignment #10: Destructuring

Details:
    What is the differences between destructuring an object and destructuring an array? When would each be appropriate too use? 
    In your own words, write 1 - 2 paragraphs explaining the different use-cases for each. If English is not your native language, 
    feel free to write in whatever language you prefer. Just please note which language it is at the top of the assignment, 
    so we know how to translate it.
    Create a file called destructuring.js and add your explanation as comments at the top of the page.
    Then, within the document write 2 code examples (1 for objects, 1 for arrays) showcasing the use-cases you explained above.

Extra Credit:
    To earn extra credit, add explanations and examples for destructuring nested objects (objects within objects), and nested arrays 
    (arrays within arrays).

*/

/*

Destructuring in javascript is a special syntax that allows us to “unpack” arrays or objects into a bunch of variables, 
as sometimes that’s more convenient. Destructuring also works great with complex functions that have a lot of parameters, 
default values, and so on.
With the ES6, it is important to keep in mind the following characteristics while destructuring an array:
    1 “Destructuring” does not mean “destructive”.
    2 Ignore elements using commas, Unwanted elements of the array can also be thrown away via an extra comma.
    3 Works with any iterable on the right-side and assign to anything at the left-side.
    4 You can swap variables easily
    5 Pack the 'rest' (...) within another variable.
    6 Initialize 'default' values to the variables.

Because JavaScript Arrays are also Objects, you can use the Array indexes as keys and then use Object 
destructuring to destructure JavaScript Arrays in a more succinct and maintainable way.

*/

// 1) “Destructuring” does not mean “destructive”.
let arr = ["Ilya", "Kantor", "Carlos", "Louise", "Gina"];
let [Name1, Name2, Name3, Name4, Name5] = arr;
console.log(Name1, Name2, Name3, Name4, Name5);
// 2) Ignore elements using commas
let arr2 = ["Ilya", "Kantor", "Carlos", "Louise", "Gina"];
let [Name2_1, , Name2_2, ] = arr2;
console.log(Name2_1, Name2_2);
// 3) Works with any iterable on the right-side and assign to anything at the left-side.
let [a, b, c] = "abc"; // ["a", "b", "c"]
let [one, two, three] = new Set([1, 2, 3]);
console.log(b, one);
// 4) Variable Swapping
let guest = "Jane";
let admin = "Pete";
[guest, admin] = [admin, guest];
console.log(`${guest} ${admin}`);
// 5) Pack the 'rest' (...) within another variable.
let [pname1, pname2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];
console.log(rest[0]); 
console.log(rest[1]);
console.log(rest.length); 
// 6) Initialize 'default' values to the variables.
let [rname = "Guest", surname = "Anonymous"] = ["Julius"];
console.log(rname);   
console.log(surname); 


//In contrast the Object destructuring has to have matching keys with the keys of the object
const myObj = {tag1:"Hello", tag2:"Goodbye", tag3: 50, tag4: [2,3,4]};
const {tag1, tag2, tag3, tag4} = myObj;
console.log(tag1,tag2,tag3,tag4);