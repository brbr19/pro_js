let unit = 'кг'; 
let amount = 12; 
switch (unit) {
  case 'км':
    let meters = amount * 1000;
    console.log(`${amount} км це ${meters} м.`);
    break;
  case 'г':
    let minutes = amount * 60;
    console.log(`${amount} г це ${minutes} хв.`);
    break;
  case 'кг':
    let grams = amount * 1000;
    console.log(`${amount} кг це ${grams} гр.`);
    break;
  default:
    console.log('введена якась інша одиниця виміру.');
}