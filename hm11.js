
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

var validEmails = arr.filter(obj => /(?:^[A-Za-z0-9]+(?:\.[A-Za-z0-9]+)?)@(?:gmail|yahoo)\.com$/.test(obj.email));
console.log(validEmails);