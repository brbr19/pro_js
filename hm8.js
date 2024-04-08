function pad(str, char, count, isStart) {
    // Перевіряємо, чи str є рядком, char є символом, а count є числом
    if (typeof str === 'string' && typeof char === 'string' && typeof count === 'number') {
      // Перевіряємо, чи символ має довжину 1
      if (char.length !== 1) {
        throw new Error('Символ має бути рядком довжиною 1');
      }
      // Перевіряємо, чи count не менше за довжину рядка
      if (count <= str.length) {
        return str; // Якщо count менше або рівне довжині рядка, то нічого не міняємо
      }
      // Визначаємо, кількість символів, які потрібно додати
      let diff = count - str.length;
      let result = str; // Результуючий рядок починається з початкового рядка
  
      // Додаємо символи до початку або кінця рядка в залежності від значення isStart
      if (isStart) {
        // Додаємо символи до початку рядка
        for (let i = 0; i < diff; i++) {
          result = char + result;
        }
      } else {
        // Додаємо символи до кінця рядка
        for (let i = 0; i < diff; i++) {
          result = result + char;
        }
      }
  
      return result; // Повертаємо отриманий результат
    } else {
      throw new Error('Введені некоректні дані');
    }
  }
  
  // Приклад використання
  console.log(pad('qwerty', '+', 10, true)); // "+++++++qwerty"
  console.log(pad('qwerty', '+', 10, false)); // "qwerty+++++++"