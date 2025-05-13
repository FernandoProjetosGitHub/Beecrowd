let lines = `2
S
0.0
-3.5
2.5
4.1`.split('\n');

let linha = parseInt(lines[0]);
let operacao = lines[1];
let acumulador = 0;


function matriz(row, operation) {
    // Inicia o contador no indice 2 + indice correspondente a lines[0] * 12, afim de percorrer as unidades da matriz até o ponto inicial.
    let inicio = 2 + row * 12;
    // Parada do inicio da row da matriz até os proximos 12 quadrados(indices da row da matriz). 
    let fim = inicio + 12;

    for (let i = inicio; i < fim; i++) {

        let valoresDaMatriz = parseFloat(lines[i]);
        
        acumulador += valoresDaMatriz;

    }

    if (operation === "M") {

        acumulador = acumulador / 12;
        
    }
}
matriz(linha, operacao);
console.log(`${acumulador.toFixed(1)}`);