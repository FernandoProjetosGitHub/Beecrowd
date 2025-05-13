let lines = `5
S
0.0
-3.5
2.5
4.1`.split('\n');

//Comentar toda a função passo a passo e refazer a função sem olhar.

// tamanho da matriz do input
let tamanhoDaMatriz = 12;
// posição exata do input da coluna desejada
let colunaExata = parseInt(lines[0]);
// qual tipo de operação será feita ("S" para soma ou "M" para média)
let operacao = lines[1];
// função responsável para resolução do exercício
function matriz(lines, tamanhoDaMatriz){
    // variável que acumulará todos os valores 
    let acumulador = 0;
    // declara um array vazio, responsável por adicionar linhas à matriz
    let linha = [];
    // loop responsável por começar pelo terceiro índice [2], até o total da matriz 12x12 (144 indices).
    for(let indice = 2; indice < lines.length; indice++){
        // adiciona ao array vazio recém criado, o array do input no índice do for, sendo assim, adicionando os 144 indices
        linha.push(lines[indice]);
        // verifica se o tamanho do array linha é igual ao tamanho determinado de cada array da matriz.
        if(linha.length === tamanhoDaMatriz){   
            // caso seja, atribui à variável acumulador, os valores da 5° coluna, índice 6.
            acumulador += parseFloat(linha[colunaExata]);
            // determina que o array volte a ser vazio, garantindo a rotatividade do loop.
            linha = [];
        }
    }
    // if ternário responsável por verificar se a operação será uma adição ou uma média.
    operacao = operacao === "S" ? console.log((acumulador).toFixed(1)) :  console.log((acumulador / tamanhoDaMatriz).toFixed(1));
    
}    
// chama a função, com os dois parâmetros, array de input e tamanho da matriz(12).
matriz(lines, tamanhoDaMatriz);
