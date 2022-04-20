var prompt = require('prompt');


//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['numero1', 'numero2'], function (err, result) {


  console.log('Command-line input received:');
  console.log('  numero1: ' + result.numero1);
  console.log('  numero2: ' + result.numero2);
  console.log("Hola"+ " " +result.numero1+result.numero2);
});