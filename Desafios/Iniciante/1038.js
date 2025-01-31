let lines = `2 3`.split('\n');

let value = (lines[0].split(" "));

let item = parseInt(value[0]);

let quantidade = parseInt(value[1]);

const lanchesArray = [0, 4.00, 4.50, 5.00, 2.00, 1.50]

let total = lanchesArray[item] * quantidade;

console.log(`Total: R$ ${total.toFixed(2)}`);



