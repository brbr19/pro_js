"use strict";
const result1 = 'number' + 3 + 3;
console.log(result1); // "Результат: "number33". Спочатку виконується конкатенація рядка 'number' з числами 3 і 3."


const result2 = null + 3;
console.log(result2); // Результат: 3. null перетворюється у 0 при арифметичних операціях.


const result3 = 5 && "qwerty";
console.log(result3); // "Результат: "qwerty". Логічна операція && повертає значення другого операнда, якщо обидва операнди істинні, а 5 вважається істинним."



const result4 = +'40' + +'2' + "hillel";
console.log(result4); // "Результат: "42hillel". Унарний плюс перетворює рядки в числа, а потім виконується конкатенація з рядком "hillel"



const result5 = '10' - 5 === 6;
console.log(result5); // Результат: false. Спочатку виконується віднімання '10' - 5, що дає 5, а потім порівнюється з 6.



const result6 = true + false;
console.log(result6); // Результат: 1. true перетворюється в 1, а false в 0.



const result7 = '4px' - 3;
console.log(result7); // Результат: NaN (Not a Number). Операція - не може бути застосована до рядка '4px'.



const result8 = '4' - 3;
console.log(result8); // Результат: 1. Спочатку рядок '4' перетворюється в число 4, а потім відбувається віднімання.



const result9 = '6' + 3 ** 0;
console.log(result9); // Результат: "61". Спочатку виконується піднесення до ступеня 3 ** 0, що дає 1, а потім виконується конкатенація з рядком '6'.



const result10 = 12 / '6';
console.log(result10); // Результат: 2. Рядок '6' перетворюється в число 6 перед діленням.


const result11 = '10' + (5 === 6);
console.log(result11); // Результат: "10false". Порівняння 5 === 6 дає false, який конкатенується з рядком '10'.



const result12 = null == '';
console.log(result12); // Результат: false. Порівняння null з пустим рядком дає false.



const result13 = 3 ** (9 / 3);
console.log(result13); // Результат: 27. Спочатку виконується ділення 9 / 3, що дає 3, а потім підноситься до ступеня 3 ** 3.



const result14 = !!'false' == !!'true';
console.log(result14); // Результат: true. Порівняння двох булевих значень !!'false' та !!'true' дає true.



const result15 = 0 || '0' && 1;
console.log(result15); // Результат: 1. Вираз 0 || '0' повертає '0', а вираз '0' && 1 повертає 1.



const result16 = (+null == false) < 1;
console.log(result16); // Результат: true. Порівняння (0 == false) дає true, а вираз true < 1 також дає true.



const result17 = false && true || true;
console.log(result17); // Результат: true. Вираз false && true дає false, але false || true дає true.



const result18 = false && (false || true);
console.log(result18); // Результат: false. Вираз (false || true) дає true, але false && true дає false.


const result19 = (+null == false) < 1 ** 5;
console.log(result19); // Результат: true. Порівняння (0 == false) дає true, а вираз 1 ** 5 дає 1, тому true < 1 також дає true.
