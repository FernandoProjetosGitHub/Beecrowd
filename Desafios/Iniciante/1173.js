let lines = `48`.split('\n');

let valorDoVetor = parseInt(lines[0]);

console.log(`N[0] = ${valorDoVetor}`);

for(let i = 1; i < 10; i++){

    valorDoVetor *= 2;

    console.log(`N[${i}] = ${valorDoVetor}`);

}


