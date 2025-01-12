let lines = `5
6
-7
8`.split('\n');

let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);

const diferenca = (A*B) - (C*D);
console.log(`DIFERENCA = ${diferenca}`);