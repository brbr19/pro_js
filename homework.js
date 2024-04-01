var prompt = require('prompt');

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['age'], function (err, result) {
  //
  // Log the results.
  //
  console.log('Command-line input received:');
  console.log('  age: ' + result.age + " років");
;
});