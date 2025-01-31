let lines = `'JOAO'
1700.00
1230.50`.split('\n');

let name = lines[0];
let wage = parseFloat(lines[1]);
let totalSales = parseFloat(lines[2]);

const bonus = (totalSales * 15 / 100) + wage;

console.log(`TOTAL = R$ ${bonus.toFixed(2)}`);
