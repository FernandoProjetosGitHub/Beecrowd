let lines = `150.00`.split('\n');

// \n representa o Enter do teclado, neste caso o split quebra os objetos, tranformados pela crase, indicando um array.
const n = 3.14159;
let raio = parseFloat(lines[0]);
let area = n * raio * raio;

console.log(`A=${area.toFixed(4)}`);


