const prompt = require('prompt');

prompt.start();

prompt.get(['number1'], function (err, result){
    let number1 = Number(result.number1);
    if(isNaN(number1)){console.log("El parametro debe de ser tipo numerico");}
    else {
        let IsPrimo = true;
        for (let index = 2; index < number1; index++){
            if( (number1%index) == 0){
                IsPrimo = false;
                break;
            }
            else{
                continue;
            }
        }
        if(!IsPrimo){
            console.log(number1.toString()+"No es primo");
        }  

    else {
        console.log(number1.toString()+ "es primo");
    }

}

});