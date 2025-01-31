let lines = `6
145
15.55`.split('\n');

let numeroFuncionario = parseInt(lines[0]);
let horasTrabalhadas = parseInt(lines[1]);
let valorHora = parseFloat(lines[2]);

const salario = (horasTrabalhadas * valorHora);
console.log(`NUMBER = ${numeroFuncionario}\nSALARY = U$ ${salario.toFixed(2)}`);