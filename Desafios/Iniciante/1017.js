let lines = `22
67`.split('\n');

let hour = parseInt(lines[0]);
let vel = parseInt(lines[1]);

let fuel = hour * vel / 12;
console.log(`${fuel.toFixed(3)}`);