let lines = `5
2 5 4 20 10`.split("\n");

let qtdDeNumerosNaLista = lines[0];
let numerosDaLista = lines[1].split(" ");
let contadorDeMultiplosDe2 = 0
let contadorDeMultiplosDe3 = 0
let contadorDeMultiplosDe4 = 0
let contadorDeMultiplosDe5 = 0


for(let i = 0; i < qtdDeNumerosNaLista; i++){
    let multiplos = parseInt(numerosDaLista[i]);
    
    if(multiplos % 2 === 0) contadorDeMultiplosDe2++;
    if(multiplos % 3 === 0) contadorDeMultiplosDe3++;
    if(multiplos % 4 === 0) contadorDeMultiplosDe4++;
    if(multiplos % 5 === 0) contadorDeMultiplosDe5++;
}

console.log(`${contadorDeMultiplosDe2} Multiplo(s) de 2`);
console.log(`${contadorDeMultiplosDe3} Multiplo(s) de 3`);
console.log(`${contadorDeMultiplosDe4} Multiplo(s) de 4`);
console.log(`${contadorDeMultiplosDe5} Multiplo(s) de 5`);