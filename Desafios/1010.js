let lines = `13 2 15.30
161 4 5.20`.split('\n');

let part1 = lines[0].split(" ");
let part2 = lines[1].split(" ");
let partCode1 = parseInt(part1[0]);
let partCode2 = parseInt(part2[0]);
let partNumber1 = parseInt(part1[1]);
let partNumber2 = parseInt(part2[1]);
let partValor1 = parseFloat(part1[2]);
let partValor2 = parseFloat(part2[2]);

const amount = (partNumber1*partValor1) + (partNumber2*partValor2);

console.log(`VALOR A PAGAR: R$ ${amount.toFixed(2)}`);