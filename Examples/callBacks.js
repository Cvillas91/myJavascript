function sumUpNumbers(num1, num2, cb){
    let summedValue;
    setTimeout(() => {
        summedValue = num1 + num2;
        cb(summedValue);
    },1000)
    
    
}

function logSummedValue(val){
    console.log(val);
}

sumUpNumbers(100,150,logSummedValue);