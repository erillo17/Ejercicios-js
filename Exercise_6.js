const prompt = require('prompt')

prompt.start()

console.log('digite 3 numeros para comparar')

prompt.get(['valor1','valor2','valor3'], function(err, result){

    if (result.valor1 > result.valor2 && result.valor1 > result.valor3){
        console.log('el mayor es'+ result.valor1)
    }else if(result.valor2 > result.valor3 && result.valor2 > result.valor1){
        console.log('el mayor es '+ result.valor2);
    }else {
        console.log('el mayor es ' + result.valor3);
    }
});