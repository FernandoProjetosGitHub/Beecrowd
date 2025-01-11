let lines = `10.0
10.0
5.0`.split('\n');

let A = parseFloat(lines[0] * 2);
let B = parseFloat(lines[1] * 3);
let C = parseFloat(lines[2] * 5);

const resultado = (A + B + C) / 10;
console.log(`MEDIA = ${resultado.toFixed(1)}`);