let lines = `1523`.split('\n');

let R = parseFloat(lines[0]);
let pi = 3.14159;
const volume = (4/3.0)*pi*(R*R*R);
console.log(`VOLUME = ${volume.toFixed(3)}`);