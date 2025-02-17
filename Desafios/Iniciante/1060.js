let lines = `7
-5
6
-3.4
4.6
12`.split('\n');

// Variável para contar quantos números positivos foram encontrados
let numPositive = 0;

// Loop que percorre todos os elementos do array "lines"
for (let index = 0; index < lines.length; index++) {

    // Converte o valor da posição "index" de string para número decimal (float)
    let value = parseFloat(lines[index]);

    // Verifica se o valor é positivo
    if (value > 0) {
        numPositive++; // Se for positivo, incrementa o contador
    }
}

// Exibe a quantidade de valores positivos encontrados
console.log(`${numPositive} valores positivos`);

