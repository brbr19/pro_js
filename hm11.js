var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
  };
  
  // Додаємо нову послугу
  services['Розбити скло'] = "200 грн";
  
  // Метод для обчислення загальної вартості послуг
  services.price = function () {
    let total = 0;
    for (let service in this) { 
      if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) { 
        total += parseInt(this[service]); 
      }
    }
    return total + ' грн'; 
  };
  
  // Метод для знаходження мінімальної вартості послуг
  services.minPrice = function () {
    let min = Infinity;
    for (let service in this) { 
      if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) { 
        min = Math.min(min, parseInt(this[service])); 
      }
    }
    return min + ' грн'; 
  };
  
  // Метод для знаходження максимальної вартості послуг
  services.maxPrice = function () {
    let max = -Infinity;
    for (let service in this) { 
      if (typeof this[service] === 'string' && !isNaN(parseInt(this[service]))) { 
        max = Math.max(max, parseInt(this[service])); 
      }
    }
    return max + ' грн'; 
  };
  
  // Перевірка роботи методів
  console.log('Загальна вартість послуг: ' + services.price());
  console.log('Мінімальна вартість послуг: ' + services.minPrice());
  console.log('Максимальна вартість послуг: ' + services.maxPrice());