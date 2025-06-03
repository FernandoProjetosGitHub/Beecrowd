let lines = `3
11
7
18`.split(`\n`);

let qtdDeCasos = parseInt(lines[0]);

for(let i = 1; i <= qtdDeCasos; i++) {
    let numero = parseInt(lines[i]);

    if(numero % 2 === 0){
        console.log(0);
    } else {
        console.log(1);
    }
}
