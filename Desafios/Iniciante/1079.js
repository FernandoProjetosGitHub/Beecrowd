// Define uma string com os dados de entrada e a divide em linhas
let lines = `3
6.5 4.3 6.2
5.1 4.2 8.1
8.0 9.0 10.0`.split('\n');

// Converte a primeira linha (número de casos de teste) para um número inteiro
let n = parseInt(lines[0]);

// Loop que itera do 1 até n (inclusive)
for(let contador = 1; contador <= n; contador++){
    // Divide a linha atual em três números e os converte para o tipo Number
    const [a, b, c] = lines[contador].split(" ").map(Number);
    
    // Calcula a média ponderada dos três números
    const media = ((a * 2) + (b * 3) + (c * 5)) / 10;
    
    // Imprime a média com uma casa decimal
    console.log(media.toFixed(1));
}



