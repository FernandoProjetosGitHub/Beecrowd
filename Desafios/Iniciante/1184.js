let lines = `S
1.0
0.0
-3.5
2.5
4.1
0.0
-3.5
2.5
4.1`.split('\n');

let dados = lines.slice(1).map(Number);
let operacao = lines[0];
let tamanhoDaMatriz = 3;
let acumulador = 0;
let contador = 0;


function transformaEmMatriz(dados, tamanhoDaMatriz) {
let matriz = [];
let posicao = 0;

// Percorre as linhas
for(let i = 0; i < tamanhoDaMatriz; i++){
    let linha = []; // Cria uma nova linha
    for(let j = 0 ; j < tamanhoDaMatriz; j++){

        // Percorre as colunas
        let dado = dados[posicao]; // Pega o valor atual
        linha.push(dado);          // Adiciona na linha
        posicao ++;                // Avança para o próximo valor
    }
    matriz.push(linha); // Adiciona a linha completa na matriz
}
return matriz;
}

let matriz1 = transformaEmMatriz(dados, tamanhoDaMatriz);

for(let i = 0; i < tamanhoDaMatriz; i++){
    for(let j = 0; j < tamanhoDaMatriz; j++)

        if (i > j) { // Somente os elementos abaixo da diagonal

        acumulador += matriz1[i][j];
        contador++;
        }
}

// Imprime o resultado de acordo com a operação:
// - Se for "S", imprime a soma
// - Se for "M", imprime a média
if (operacao === "S") {
    console.log(acumulador.toFixed(1));
} else if (operacao === "M") {
    console.log((acumulador / contador).toFixed(1));
}

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------


// // Entrada de dados simulada (linha 0 = operação; linhas 1+ = valores da matriz)
// let lines = `S
// 1.0
// 0.0
// -3.5
// 2.5
// 4.1
// // ... até completar 144 valores`
//   .split('\n')  // Quebramos por linha
//   .filter(l => l.trim() !== ''); // Removemos linhas vazias, se houver

// let operacao = lines[0];                 // Operação: "S" para soma, "M" para média
// let dados = lines.slice(1).map(Number); // Convertemos o restante em números
// let tamanhoDaMatriz = 12;               // Tamanho fixo 12x12
// let acumulador = 0;                     // Armazena a soma
// let contador = 0;                       // Conta quantos elementos foram somados

// // 🔁 Função que transforma os dados em uma matriz 12x12
// function transformaEmMatriz(dados, tamanho) {
//   let matriz = [];
//   let pos = 0;

//   for (let i = 0; i < tamanho; i++) {
//     let linha = [];
//     for (let j = 0; j < tamanho; j++) {
//       linha.push(dados[pos]);
//       pos++;
//     }
//     matriz.push(linha);
//   }

//   return matriz;
// }

// // Criamos a matriz a partir dos dados
// let matriz = transformaEmMatriz(dados, tamanhoDaMatriz);

// // ✅ Agora percorremos os elementos **abaixo da diagonal principal**
// // A diagonal principal está onde i === j (ex: [0][0], [1][1], [2][2], ..., [11][11])
// // Abaixo dela temos i > j → ou seja, linha está abaixo da coluna
// for (let i = 0; i < tamanhoDaMatriz; i++) {
//   for (let j = 0; j < tamanhoDaMatriz; j++) {
//     if (i > j) {
//       acumulador += matriz[i][j]; // Somamos o valor
//       contador++;                 // Contamos um elemento somado
//     }
//   }
// }

// // 🎯 Resultado depende da operação ("S" ou "M")
// if (operacao === 'S') {
//   console.log(acumulador.toFixed(1)); // Soma
// } else if (operacao === 'M') {
//   console.log((acumulador / contador).toFixed(1)); // Média
// }

// /*
//   ✅ EXPLICAÇÃO VISUAL:

//   Matriz de 12x12:
//     [0][0] [0][1] [0][2] ... [0][11]
//     [1][0] [1][1] [1][2] ... [1][11]
//     [2][0] [2][1] [2][2] ... [2][11]
//     ...
//     [11][0] ...            [11][11]

//   Parte abaixo da diagonal:
//     São todas as posições onde o índice da linha é maior que o da coluna (i > j)
//     Exemplo:
//       [1][0]
//       [2][0], [2][1]
//       [3][0], [3][1], [3][2]
//       ...
//       [11][0] até [11][10]

//   📌 Total de elementos somados: (12 * 11) / 2 = 66

//   ✅ Vantagens dessa forma:
//   - Clareza: o `if (i > j)` expressa exatamente a lógica
//   - Reutilizável para qualquer matriz quadrada
//   - Fácil de manter e entender
// */
