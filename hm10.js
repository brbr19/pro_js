const myObject = {
    name: 'Денис',
    age: 26,
    city: 'Київ',
    getInfo: function () {
      for (let prop in this) {
        if (typeof this[prop] !== 'function') {
          console.log(`${prop}: ${this[prop]}`);
        }
      }
    },
  };
  // Виведемо інформацію про об'єкт
  myObject.getInfo();
  
  // Додамо нову властивість до об'єкта
  myObject.newProperty = 'Нова властивість!';
  
  // Знову виведемо інформацію про об'єкт, включаючи щойно додану властивість
  myObject.getInfo();