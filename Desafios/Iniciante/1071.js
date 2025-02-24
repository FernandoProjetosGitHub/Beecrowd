// Simula a entrada de dados como se estivesse lendo de um arquivo ou input do usuário
let lines = `12
12`.split('\n'); // Divide a string em um array separando por quebras de linha

// Armazena os valores de entrada no array "value"
let value = lines;

// Converte os valores da entrada para números inteiros
let x = parseInt(value[0]); // Primeiro número da entrada
let y = parseInt(value[1]); // Segundo número da entrada

// Define os limites do intervalo excluindo os próprios valores X e Y
const lowValue = Math.min(x, y) + 1; // Obtém o menor valor e soma 1 para excluí-lo do intervalo
const highValue = Math.max(x, y); // Obtém o maior valor sem incluir no intervalo

// Variável para armazenar a soma dos números ímpares
let sumOdd = 0;

// Loop que percorre os números entre "lowValue" e "highValue"
for (let counter = lowValue; counter < highValue; counter++) {
    // Verifica se o número atual é ímpar (resto da divisão por 2 diferente de 0)
    if (counter % 2 !== 0) {
        sumOdd += counter; // Soma os valores ímpares ao acumulador
    }
}

// Exibe a soma total dos números ímpares dentro do intervalo
console.log(sumOdd);

