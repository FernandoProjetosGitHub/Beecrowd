let lines = `3
8
51
7`.split('\n');

let primos = (lines).map(element => parseInt(element));

let quantidadeDePrimos = primos[0];

function ehPrimo(numeroTeste) {

    if (numeroTeste < 2)
        return false;
    // numeroTeste = numeroTeste < 2 ? return false : return true;
    let divisores = 0;

    for (let percorre = 1; percorre <= numeroTeste; percorre++){
        if (numeroTeste % percorre === 0){
            divisores ++
        }
    }
    return divisores === 2
}
for (let percorre = 1; percorre <= quantidadeDePrimos; percorre++){
    
    let numeroAtual = primos[percorre];

    if(ehPrimo(numeroAtual)){
        console.log(`${numeroAtual} eh primo`);
    }else {
        console.log(`${numeroAtual} nao eh primo`);
    }
}

