function myIsNaN(value) {
    // Перевіряємо чи аргумент є числом
    if (typeof value === 'number') {
      // Перевіряємо чи значення рівне NaN
      return value !== value;
    }
    // Якщо аргумент не є числом, то не є NaN
    return false;
  }
  // Приклад використання
  let num = 35;
  let str = 'string';
  let nan = NaN;
  
  console.log(myIsNaN(num)); // false
  console.log(myIsNaN(str)); // false
  console.log(myIsNaN(nan)); // true