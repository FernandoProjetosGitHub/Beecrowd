let lines = `200.0000`.split('\n');

let valorDeX = Number(lines[0]);

for(let i = 0; i <= 100; i++){

    console.log(`N[${i}] = ${valorDeX.toFixed(4)}`);
    valorDeX /= 2;
}











