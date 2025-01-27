let lines = `91.01`.split('\n');

let value = Math.round(Number(lines[0]) * 100);
// Multiplicar por 100 para transformar em centavos e evitar erros ao dividir os valores

let numeroNotasCem = Math.floor(value/10000);
// Dividir por +100 para adicionar o 100 multiplicado no início.
value = value % 10000;

let numeroNotasCinquenta = Math.floor(value/5000);
value = value % 5000;

let numeroNotasVinte = Math.floor(value/2000);
value = value % 2000;

let numeroNotasDez = Math.floor(value/1000);
value = value % 1000;

let numeroNotasCinco = Math.floor(value/500);
value = value % 500;

let numeroNotasDois = Math.floor(value/200);
value = value % 200;

let numeroMoedasUmReal = Math.floor(value / 100);
value = value % 100;

let numeroMoedasCinquenta = Math.floor(value / 50);
value = value % 50;

let numeroMoedasVinteCinco = Math.floor(value / 25);
value = value % 25;

let numeroMoedasDez = Math.floor(value / 10);
value = value % 10;

let numeroMoedasCinco = Math.floor(value / 5);
value = value % 5;

let numeroMoedasUm = Math.floor(value / 1);
value = value % 1;



console.log("NOTAS:")
console.log(`${numeroNotasCem} nota(s) de R$ 100.00`);
console.log(`${numeroNotasCinquenta} nota(s) de R$ 50.00`);
console.log(`${numeroNotasVinte} nota(s) de R$ 20.00`);
console.log(`${numeroNotasDez} nota(s) de R$ 10.00`);
console.log(`${numeroNotasCinco} nota(s) de R$ 5.00`);
console.log(`${numeroNotasDois} nota(s) de R$ 2.00`);
console.log("MOEDAS:")
console.log(`${numeroMoedasUmReal} moeda(s) de R$ 1.00`);
console.log(`${numeroMoedasCinquenta} moeda(s) de R$ 0.50`);
console.log(`${numeroMoedasVinteCinco} moeda(s) de R$ 0.25`);
console.log(`${numeroMoedasDez} moeda(s) de R$ 0.10`);
console.log(`${numeroMoedasCinco} moeda(s) de R$ 0.05`);
console.log(`${numeroMoedasUm} moeda(s) de R$ 0.01`);

