function spreadFunction(...multipleArgs){
    console.log(multipleArgs);
}

spreadFunction(1,"Hola",true)
restFunction(1,"hola",2)

function spreadFunction(...multipleArgs){
    console.log(multipleArgs);
}

function restFunction(x,y,...restofArgs){
    console.log(restofArgs);
}
