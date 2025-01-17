let lines = `12.7 10.4 15.2`.split('\n');

const linesSplitConversion = lines[0].split(" ");
let pi = 3.14159;
let A = parseFloat(linesSplitConversion[0]);
let B = parseFloat(linesSplitConversion[1]);
let C = parseFloat(linesSplitConversion[2]);

let rightTriangle = (A*C) / 2;
let circle = pi*(C*C);
let trapeze = ((A+B) * C) / 2;
let square = B*B;
let rectangle = A*B;
console.log(`TRIANGULO: ${rightTriangle.toFixed(3)}\nCIRCULO: ${circle.toFixed(3)}\nTRAPEZIO: ${trapeze.toFixed(3)}\nQUADRADO: ${square.toFixed(3)}\nRETANGULO: ${rectangle.toFixed(3)}`);