const prompt = require('prompt');
prompt.start();

prompt.get(['number1','number2'], function(err, result){
    let number1 = Number(result.number1);
    let number2 = Number(result.number2);

    if(isNaN(number1) || isNaN(number2)){
        console.log("Ambos parametros deben ser de tipo numerico");}
        else{
            if(number1 > number2){console.log(number1.toString()+" Es mayor");}
            else if(number2 > number1){console.log(number2.toString()+" Es mayor");} 
        }
})