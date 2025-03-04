let lines = `34565
1138888
45
2
6
8`.split('\n'); 

let valueArray = lines.map(Number);

// Inicializa a variável que armazenará o maior valor encontrado
let highValue = valueArray[0]; // Assume que o primeiro número é o maior inicialmente
let position = 1; // Define a posição inicial como 1 (pois o primeiro número está na posição 1)

// Percorre o array a partir do segundo elemento para comparar com o maior valor atual
for (let counter = 1; counter < valueArray.length; counter++) {
    
    // Se encontrarmos um número maior que o maior valor atual
    if (valueArray[counter] > highValue) {
        
        highValue = valueArray[counter]; // Atualiza o maior valor
        position = counter + 1; // Ajusta a posição (array começa em 0, mas queremos contar a partir de 1)
    }
}

// Exibe o maior valor encontrado
console.log(highValue);

// Exibe a posição do maior valor
console.log(position);






