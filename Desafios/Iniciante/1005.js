let lines = `10.0
10.0`.split('\n');

let A = parseFloat(lines[0] * 3.5);
let B = parseFloat(lines[1] * 7.5);

const resultado = (A + B) / 11;
console.log(`MEDIA = ${resultado.toFixed(5)}`);