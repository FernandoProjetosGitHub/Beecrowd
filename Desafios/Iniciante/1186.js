let lines = `S
1.0
0.0
-3.5
2.5
4.1`.split("\n");

let operacao = lines[0];
let dados = lines.slice(1).map(Number);
let tamanhoDaMatriz = 12;
let acumulador = 0;
let contador = 0;

function transformaEmMatriz(dados, tamanhoDaMatriz){
    let matriz = [];
    let posicao = 0;

    for(let i = 0; i < tamanhoDaMatriz; i++){
        let linha = [];

        for(let j = 0; j < tamanhoDaMatriz; j++){
            let dado = dados[posicao];
            linha.push(dado);
            posicao++;
        }
        matriz.push(linha);
    }

    return matriz;

}

let matriz1 = transformaEmMatriz(dados, tamanhoDaMatriz);


for(let i = 0; i < tamanhoDaMatriz; i++){
    for(let j = 0; j < tamanhoDaMatriz; j++) {
        if(i + j > tamanhoDaMatriz - 1){
        acumulador += matriz1[i][j];
        contador++;
        }
    }
}
if (operacao === "S") {

    console.log(acumulador.toFixed(1));

} else if (operacao === "M") {

    console.log((acumulador / contador).toFixed(1));
}