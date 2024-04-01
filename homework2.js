const prompt = require('prompt');

prompt.start();

prompt.get(['age'], function (err, result) {
  const age = parseInt(result.age);

  if (!isNaN(age) && age >= 0) {
    let yearsWord;
    if (age === 1 || age % 10 === 1) {
      yearsWord = 'рік';
    } else if ((age >= 11 && age <= 19) || (age % 10 >= 5 && age % 10 <= 9) || (age % 10 === 0)) {
      yearsWord = 'років';
    } else {
      yearsWord = 'роки';
    }
    console.log(`Коректне число: ${age} ${yearsWord}`);
  } else {
    console.log('Некоректне введення. Будь ласка, введіть додатнє число.');
  }
});