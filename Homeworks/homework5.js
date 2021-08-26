/*
@Date:   Sunday Oct 11 2020
@author: Carlos Gonzalo Villas Velazquez
@Place:  Warsaw, Poland

Homework Assignment #5: Switch Statements

Details:
    Create a function called "timeAdder" that can add two time values together. 
    For example, it should be able to add 25 hours and 3 days together. 
    The function should accept 4 parameters:
    value1, label1, value2, label2
    - value1 and value2 should accept positive integers  
    - label1 and label2 should accept any of the following strings: "seconds", "minutes", "hours", "days", "second", "minute", "hour", "day"
    For example your function may be called in any of the following ways:
    timeAdder(1,"minute",3,"minutes")
    timeAdder(5,"days",25,"hours")
    timeAdder(1,"minute",240,"seconds")

Requirements:
    1. Your function should include at least one switch
    2. Your function must accept any possible combination of inputs 
    3. If the inputs are valid, it should return an array with 2 variables inside of it: value3, and  label3. For example:
    return [5,"minutes"]; 
    The exact label you choose to return for label3 ("minutes" for example) is up to you.
    4. If the inputs are invalid or impossible, it should return false. Here are examples of impossible and invalid inputs:
    timeAdder(5,"hour",5,"minutes") // This is impossible because "hour" is singular and 5 is plural
    timeAdder(false,false,5,"minutes") // This is invalid because the first 2 arguments are not the correct types
    timeAdder({},"days",5,"minutes") // This is invalid because the first argument is the wrong type

Extra Credit:
    Rather than returning an arbitrary label for label3, return the largest label that can be used with an integer value
    For example if someone calls:
    timeAdder(20,"hours",4,"hours")
    You could return: [1,"day"] rather than [24,"hours"]
    But if they called
    timeAdder(20,"hours",5,"hours")
    You would return [25,"hours"] because you could not use "days" with an integer value to represent 25 hours.

*/

console.log(timeAdder(1,"hour",60,"minutes"));

function timeAdder (value1, label1, value2, label2){ //Main function
    const zeroCheck = functZeroCheck(value1,value2);
    const firstCheck = functFirstCheck(value1,label1,value2,label2);
    const secondCheck1 = functSecondCheck(value1,label1);
    const secondCheck2 = functSecondCheck(value2,label2);
    const finalTimeReal = sumsTime(value1, label1, value2, label2);
    var myExtraCredtiArray = LastFunctionExtraCredit(finalTimeReal)
    if (firstCheck && zeroCheck && secondCheck1 && secondCheck2) {
        console.log("The sum of both times is", finalTimeReal,"seconds");
    } else {
        return "Please try inputting your values again."
    }; 
    return myExtraCredtiArray;  
};

function functZeroCheck (val1,val2){ //This function checks if there are any negative values
    if (val1<0){
        console.log("Please enter a positive value for value1");
        return false;
    } else if (val2 < 0){
        console.log("Please enter a positive value for value2");
        return false;
    } else{
        return true;
    }
};

function functFirstCheck (val1,labl1,val2,labl2){ //This function checks if the input types are correct
    const typeofValue1 = typeof(val1);
    const typeofValue2 = typeof(val2);
    const typeofLabel1 = typeof(labl1);
    const typeofLabel2 = typeof(labl2);
    if (typeofValue1 !== "number"){
        console.log("Wrong variable 1 type, expected number");
    } else if (typeofValue2 !== "number"){
        console.log("Wrong variable 2 type, expected number");
    } else if (typeofLabel1 !== "string"){
        console.log("Wrong label 1 type, expected string");
    } else if (typeofLabel2 !== "string"){
        console.log("Wrong label 2 type, expected string");
    } else {
        return true
    };
};
function functSecondCheck (val1,labl1){ //This function checks if the plural matches the number, also if the string matches the 8 cases
    switch (labl1){
        case "second":
        case "minute":
        case "hour":
        case "day":
            if (val1 > 1){
                console.log("This is impossible because" , labl1 ,"is singular and", val1.toString(), "is plural");
                return false;
            } else {
                return true;
            };
        case "seconds":
        case "minutes":
        case "hours":
        case "days":
            if (val1 === 1){
                console.log("This is impossible because" , labl1 ,"is plural and", val1.toString(), "is singular");
                return false;
            } else{
                return true;
            };
        default:
            console.log("Please select between second(s), minute(s), hour(s) or day(s)")
            return false
    };
};

function sumsTime (val1, lbl1, val2, lbl2){ //This function sums time and converts to seconds
    var finalTime = 0
    switch (lbl1){
        case "minutes":
        case "minute":
            finalTime += val1 * 60
            break;
        case "hour":
        case "hours":
            finalTime += val1 * 60 *60
            break;
        case "day":
        case "days":
            finalTime += val1 * 60 * 60 * 24
            break;
        default:
            finalTime += val1
            break;
    };
    switch (lbl2){
        case "minutes":
        case "minute":
            finalTime += (val2 * 60)
            break;
        case "hour":
        case "hours":
            finalTime += val2 * 60 *60
            break;
        case "day":
        case "days":
            finalTime += val2 * 60 * 60 * 24
            break;
        default:
            finalTime +=val2; 
            break;
    };
    return finalTime;
}

function LastFunctionExtraCredit(val1){ //This function converts to the largest available integer
    if(val1 % 60 === 0){
        if (val1 % 3600 === 0){
            if (val1 % 86400 ===0){
                return [val1/86400,"days"];
            } else {
                return [val1/3600,"hours"];
            }
        } else {
            return [val1/60,"minutes"];
        }
    } else {
        return [val1,"seconds"];
    };
};
