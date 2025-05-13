// JS 12.18(Beecrowd version)

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

// Lê toda a entrada do usuário (útil para ambientes como Beecrowd)
var input = require('fs').readFileSync('/dev/stdin', 'utf8');

// Separa a entrada por quebras de linha
var lines = input.split('\n');

// Pega a primeira linha da entrada: será a operação (S para soma ou M para média)
let operacao = lines[0];

// Converte as demais linhas em números (valores da matriz)
let dados = lines.slice(1).map(Number);

// Define o tamanho da matriz quadrada (12x12)
let tamanhoDaMatriz = 12;

// Variável para acumular os valores acima da diagonal principal
let acumulador = 0;

// Contador para saber quantos elementos foram somados (necessário para a média)
let contador = 0;

// Função que transforma os dados em uma matriz 12x12
function transformaEmMatriz(valores, tamanho) {
    let matriz = [];        // Matriz final a ser retornada
    let posicao = 0;        // Posição atual no vetor de valores

    // Percorre as linhas
    for (let i = 0; i < tamanho; i++) {
        let linha = [];     // Cria uma nova linha

        // Percorre as colunas
        for (let j = 0; j < tamanho; j++) {
            let valor = valores[posicao]; // Pega o valor atual
            linha.push(valor);            // Adiciona na linha
            posicao++;                    // Avança para o próximo valor
        }

        matriz.push(linha); // Adiciona a linha completa na matriz
    }

    return matriz; // Retorna a matriz montada
}

// Cria a matriz 12x12 usando os dados fornecidos
let mat3 = transformaEmMatriz(dados, tamanhoDaMatriz);

// Percorre os elementos acima da diagonal principal (onde j > i)
for (let i = 0; i < tamanhoDaMatriz; i++) {
    for (let j = i + 1; j < tamanhoDaMatriz; j++) {
        acumulador += mat3[i][j]; // Soma o valor
        contador++;                // Conta esse elemento
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

// JS (Current Version).


//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

// Entrada simulada com operação (S para soma, M para média) e alguns valores
let stringArrayDeEntrada = `S
1.0
0.0
-3.5
2.5
4.1`;

// Quebra a entrada em linhas separadas (1ª linha = operação, resto = números)
let linhas = stringArrayDeEntrada.trim().split('\n');

// Separa a operação da primeira linha (S ou M)
let operacao = linhas[0];

// Converte as demais linhas (strings) em números
let dados = linhas.slice(1).map(Number);

// Define o tamanho fixo da matriz (12x12)
let tamanhoDaMatriz = 12;

// Variáveis para acumular os valores e contar quantos somamos
let acumulador = 0;
let contador = 0;

// Função para transformar um vetor de dados em uma matriz quadrada
function transformaEmMatriz(valores, tamanho) {
    let matriz = [];        // Matriz que será montada
    let posicao = 0;        // Posição no vetor de valores

    // Loop externo para as linhas
    for (let i = 0; i < tamanho; i++) {
        let linha = [];     // Cria uma nova linha

        // Loop interno para as colunas
        for (let j = 0; j < tamanho; j++) {
            // Adiciona o valor correspondente, ou 0 caso falte valor
            linha.push(valores[posicao++] ?? 0);

        }

        // Adiciona a linha completa na matriz
        matriz.push(linha);
    }

    return matriz; // Retorna a matriz montada
}

// Cria a matriz usando os dados fornecidos
let mat3 = transformaEmMatriz(dados, tamanhoDaMatriz);

// Mostra a matriz no console para verificação
console.log(mat3);

// Percorre a matriz para somar os elementos acima da diagonal principal
for (let i = 0; i < tamanhoDaMatriz; i++) {
    for (let j = i + 1; j < tamanhoDaMatriz; j++) {
        acumulador += mat3[i][j]; // Soma o valor acima da diagonal
        contador++;               // Conta esse elemento
    }
}

// Exibe o resultado conforme a operação: soma ou média
if (operacao === "S") {
    console.log(acumulador.toFixed(1));
} else if (operacao === "M") {
    console.log((acumulador / contador).toFixed(1));
}


















