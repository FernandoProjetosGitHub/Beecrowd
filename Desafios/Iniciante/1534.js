// let lines = `4
// 7`.split("\n");

// let matrizes = lines.length;

// let todasAsMatrizes = [];

// for (let i = 0; i < matrizes; i++) {
//     // Transforma os indices em números
//     let tamanhoDaMatriz = parseInt(lines[i]);
//     // Cria a matriz 
//     let matriz = transformaEmMatriz(tamanhoDaMatriz);
//     // Armazena a matriz no array final
//     todasAsMatrizes.push(matriz);
// }

// // Função pra criar as matrizes de acordo com os índices
function transformaEmMatriz(tamanho) {

    let matriz = [];

    for (let i = 0; i < tamanho; i++) {

        let linha = [];

        for (let j = 0; j < tamanho; j++) {

            linha.push(3);

        }
        matriz.push(linha); // Adiciona todas as linhas criando a matriz quadrada.
    }
    return matriz; // retorna a matriz criada.
}

// function modificarMatriz(matriz){
//     for(let i = 0; i < todasAsMatrizes.length; i++) {

//     let matriz = todasAsMatrizes[i];

//     let tamanho = matriz.length; // o tamanho da matriz representa o valor original, já que pega o valor do array na matriz.

//     if (tamanho % 2 === 0) {

//         let diagonalPrincipal = 0

//         for(let indice = 0; indice < matriz.length; indice++){
//             let linha = matriz[indice];
//             linha[diagonalPrincipal] = 1;
//             diagonalPrincipal++;
//         }
//     }else {
        
//         let diagonalSecundaria = tamanho;

//         for(let indice2 = diagonalSecundaria; indice2 < matriz.length; indice2++) {
//             let linha2 = matriz[indice2];
//             linha2[diagonalSecundaria] = 2;
//             diagonalSecundaria--;
//         }
//     }
// }
//     return matriz;

// }
// matrizBeecrowd = modificarMatriz(matrizBeecrowd);



// chat gpt
// let lines = `4
// 7`.split("\n");

// let todasAsMatrizes = [];

// for (let i = 0; i < lines.length; i++) {
//     let tamanho = parseInt(lines[i]);
//     let matriz = transformaEmMatriz(tamanho);
//     let matrizModificada = modificarMatriz(matriz, tamanho);
//     todasAsMatrizes.push(matrizModificada);
// }

// // Cria matriz quadrada com todos os valores como 3
// function transformaEmMatriz(tamanho) {
//     let matriz = [];
//     for (let i = 0; i < tamanho; i++) {
//         let linha = [];
//         for (let j = 0; j < tamanho; j++) {
//             linha.push(3);
//         }
//         matriz.push(linha);
//     }
//     return matriz;
// }

// // Modifica a matriz de acordo com as diagonais
// function modificarMatriz(matriz, tamanho) {
//     for (let i = 0; i < tamanho; i++) {
//         // Sempre define a diagonal principal como 1
//         matriz[i][i] = 1;

//         // Sempre define a diagonal secundária como 2 (pode sobrescrever a principal se for ímpar)
//         matriz[i][tamanho - 1 - i] = 2;
//     }
//     return matriz;
// }

// // Exibe as matrizes no console
// for (let i = 0; i < todasAsMatrizes.length; i++) {
//     for (let linha of todasAsMatrizes[i]) {
//         console.log(linha.join(" "));
//     }
// }

// novo
let lines = `5`.split("\n");

for(let line = 0; line < lines.length;line++) {
    let numeroAtual = lines[line];
    let matrizAtual = transformaEmMatriz(numeroAtual);
    
    //diagonal principal

    for(let i = 0; i < matrizAtual.length; i++){
        matrizAtual[i][i] = 1;
        
    }
    //diagonal secundaria
    for(let j = 0; j < matrizAtual.length; j++){
        let tamanhoDaMatriz = matrizAtual.length
        matrizAtual[j][tamanhoDaMatriz -1 -j] = 2;
    }
    
    show(matrizAtual);
   
}

 function show(mat) {
    const matlines = mat.length;

    for (let line = 0; line < matlines; line++) {
        console.log(mat[line].join(" "));

    }
}

