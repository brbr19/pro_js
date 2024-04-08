function checkProbabilityTheory(count) {
    // Ініціалізуємо лічильники парних та непарних чисел
    let evenCount = 0;
    let oddCount = 0;
  
    // Генеруємо випадкові числа та рахуємо кількість парних та непарних чисел
    for (let i = 0; i < count; i++) {
      let randomNum = Math.floor(Math.random() * (1000 - 100 + 1) + 100);
      if (randomNum % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    // Обчислюємо відсоткове співвідношення парних до непарних чисел
    let evenPercentage = (evenCount / count) * 100;
    let oddPercentage = (oddCount / count) * 100;
  
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Парних чисел: ${evenCount}`);
    console.log(`Не парних чисел: ${oddCount}`);
    console.log(`Відсоток парних до не парних: ${evenPercentage.toFixed(2)}% : ${oddPercentage.toFixed(2)}%`);
  }
  checkProbabilityTheory(700);