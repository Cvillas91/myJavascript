/*
@Date:   Thursday Nov 05 2020
@author: Carlos Gonzalo Villas Velazquez
@Place:  Warsaw, Poland

Homework Assignment #11: Exceptions

Details:
    For this assignment you're going to build a simple function and then reinforce it with some defensive code 
    (to bullet-proof it against throwing exceptions).
    The function should be called "reverseJsonArray" and it should accept one string, and return either a string or false.
    When called successfully, the function:
        1. Accepts one parameter: a string. A JSON-stringified version of a Javascript Array
        2. Parses the JSON to obtain the Array
        3. Reverses the order of the the items in the Array
        4. JSON-stringifies the result, and returns it.
    If for some reason the function cannot do the above (because it is passed a parameter that is not a JSON-stringified version of an array), 
    it should return false. The function should never throw an exception.
    For example: if we call like so:
        reverseJsonArray('["a","b","c"]')
    We would expect this value to be returned:
        '["c","b","a"]'
    Alternatively, if we called it like so:
        reverseJsonArray(123);
    We would expect it to return false.

Extra Credit:
    Below your function, include 10+ examples of how the function can be invoked and will return the correct value. 
    Specifically make sure you include examples of the function being called:
        1. Without any arguments
        2. With a boolean as the argument
        3. With an Array (non-stringified) as the argument
        4. With a string argument that is not properly formatted JSON
        5. With a stringified-array that only has one value
        6. With a stringified-array that is empty
        7. With a stringified-array that has an even-number of values
        8. With a stringified-array that has an odd-number of values

*/

var myArray = [ "John", "Peter", "Sally", "Jane" ];
var myJSONarray = JSON.stringify(myArray);

function reverseJsonArray(JsonArray){
    if (typeof JsonArray === 'string' || JsonArray instanceof String){
        try {
            var newArray = JSON.parse(JsonArray)
            newArray = newArray.reverse();
            return newArray
        } catch(e){
            return false;
        }
    } else{
        return false;
    }
}

console.log(reverseJsonArray(myJSONarray))

//Extra Credit
    // 1. Without any arguments
    console.log(reverseJsonArray()) //Returns false
    // 2. With a boolean as the argument
    console.log(reverseJsonArray(false)) //Returns false
    // 3. With an Array (non-stringified) as the argument
    console.log(reverseJsonArray(["a","b","c"])) //Returns false
    // 4. With a string argument that is not properly formatted JSON
    console.log(reverseJsonArray("Hello world")) //Returns false
    // 5. With a stringified-array that only has one value
    console.log(reverseJsonArray(JSON.stringify(['Jason']))) //Returns '[Jason]'
    // 6. With a stringified-array that is empty
    console.log(reverseJsonArray(JSON.stringify([]))) //Returns '[]'
    // 7. With a stringified-array that has an even-number of values
    console.log(reverseJsonArray(JSON.stringify(['Jason','Chris']))) //Returns ['Chris', 'Jason']
    // 8. With a stringified-array that has an odd-number of values
    console.log(reverseJsonArray(JSON.stringify(['Jason','Chris','Carlos']))) //Returns ['Carlos', 'Chris', 'Jason']






