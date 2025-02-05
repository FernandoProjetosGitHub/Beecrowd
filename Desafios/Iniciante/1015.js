let lines = `1.0 7.0
5.0 9.0`.split('\n');

let xy1 = lines[0].split(" ");
let xy2 = lines[1].split(" ");

let x1 = parseFloat(xy1[0]);
let y1 = parseFloat(xy1[1]);
let x2 = parseFloat(xy2[0]);
let y2 = parseFloat(xy2[1]);

const distance = Math.hypot(x2 - x1, y2-y1);
console.log(`${distance.toFixed(4)}`);