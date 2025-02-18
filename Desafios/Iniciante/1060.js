let lines = `7
-5
6
-3.4
4.6
12`.split('\n');


// Declara a variável numPositive e usa o método reduce para contar os números positivos no array "lines"
let numPositive = lines.reduce((acumulador, itemAtual) => {
    
    // Converte o itemAtual para um número inteiro e verifica se ele é maior que zero
    if (parseFloat(itemAtual) > 0) {
        
        // Se for positivo, incrementa o acumulador em 1
        acumulador += 1;
    }

    // Retorna o acumulador atualizado para a próxima iteração
    return acumulador;

// Define o valor inicial do acumulador como 0
}, 0);



// Exemplo de saída: Se lines = ["1", "-2", "3", "0", "5", "-6"], numPositive será 3
// Exibe a quantidade de valores positivos encontrados
console.log(`${numPositive} valores positivos`);


