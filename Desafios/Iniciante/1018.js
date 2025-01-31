let lines = `11257`.split('\n');

let value = parseInt(lines[0]);

console.log(`${value}`);

let numeroNotasCem = Math.floor(value/100);
value = value % 100;

let numeroNotasCinquenta = Math.floor(value/50);
value = value % 50;

let numeroNotasVinte = Math.floor(value/20);
value = value % 20;

let numeroNotasDez = Math.floor(value/10);
value = value % 10;

let numeroNotasCinco = Math.floor(value/5);
value = value % 5;

let numeroNotasDois = Math.floor(value/2);
value = value % 2;

let numeroNotasUm = Math.floor(value / 1);
value = value % 1;
console.log(`${numeroNotasCem} nota(s) de R$ 100,00`);
console.log(`${numeroNotasCinquenta} nota(s) de R$ 50,00`);
console.log(`${numeroNotasVinte} nota(s) de R$ 20,00`);
console.log(`${numeroNotasDez} nota(s) de R$ 10,00`);
console.log(`${numeroNotasCinco} nota(s) de R$ 5,00`);
console.log(`${numeroNotasDois} nota(s) de R$ 2,00`);
console.log(`${numeroNotasUm} nota(s) de R$ 1,00`);

