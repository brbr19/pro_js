function pow(x, y) {
    let result = 1;
  
    for (let i = 0; i < y; i++) {
      result *= x;
    }
    return result;
  }
  // Приклад використання
  let base = 3;
  let exponent = 5;
  let result = pow(base, exponent);
  
  console.log(`${base} у ступені ${exponent} дорівнює ${result}`);