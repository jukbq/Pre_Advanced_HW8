let ask = prompt('Введіть число');
let x = ask;
let result = (x == 0) ? 'Число 0' : (x % 2 !== 0) ? 'Число непарне' : 'Число парне';
console.log(result);
console.log(x);
