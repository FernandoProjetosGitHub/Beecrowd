let lines = `4
11
0`.split('\n');

// Convertendo as strings do array lines em números.
let arrayLines = (lines).map(line => parseInt(line));

// Loop responsável por percorrer o array de números, para processar o exercício linha a linha.
for(let percorreArray = 0; percorreArray < arrayLines.length; percorreArray++){
    // Atribuição dos valores resgatados do array anterior à variável seguinte:
    let valorDeX = arrayLines[percorreArray];
    //Checa caso o valor da variável anterior seja 0, caso seja o loop deve parar.
    if(valorDeX === 0 ){
        break;
    //Checa caso o valor resgatado é impar, caso seja, adiciona +1, para garantir que seja par.     
    }if(valorDeX % 2 !== 0){
        valorDeX ++;
    }
    //Cria a variável somaDePares para acumular o valor final da soma dos mesmos.
    let somaDePares = 0;
    // Loop responsável por adicionar os próximos 5 valores pares à Variável somaDePares.
    for(let somandoNumerosPares = 0; somandoNumerosPares < 5; somandoNumerosPares++){
        // Atribuição dos valores pares resgatados do loop anterior à variável seguinte:
        somaDePares += valorDeX;
        // Adiciona +2 ao valorDeX para manter o loop nos pares.
        valorDeX += 2
    }
    
    console.log(somaDePares);
}

