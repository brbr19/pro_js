function myBlend(arr) {
    var currentIndex = arr.length, randomIndex, tempValue;

    // Поки не проходили всі елементи масиву
    while (currentIndex !== 0) {
        // Вибираємо випадковий індекс з залишених елементів
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // Міняємо поточний елемент з елементом на випадковому індексі
        tempValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = tempValue;
    }

    // Повертаємо перемішаний масив (проте, у функції масив уже буде перемішаний)
    return arr;
}

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("До перемішування:", arr);
myBlend(arr);
console.log("Після перемішування:", arr);