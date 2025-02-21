let lines = `91`.split('\n');

let value = parseInt(lines[0]);
//Se for par, adiciona +1 para torna-lo ímpar
if (value % 2 === 0){

    value += 1;
}
//Loop pra percorrer os próximos 6 números impares
for (let contador = 0; contador < 6 ; contador++) {

    console.log(value);
    //adição que garante o sucesso dos ímpares, adicionando +2 ao número.
    value += 2;
    
}

