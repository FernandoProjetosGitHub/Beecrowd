// Criamos uma string com números separados por quebras de linha (\n)
let lines = `7
-5
6
-3.4
4.6
12`.split('\n'); 
// O `split('\n')` divide a string em um array de strings, separando os valores sempre que houver uma quebra de linha.
// Agora, `lines` é um array assim: ["7", "-5", "6", "-3.4", "4.6", "12"]

// Convertendo cada elemento do array para um número e filtrando apenas os positivos
let positiveNumbers = lines.map(Number).filter(num => num > 0);
// `map(Number)`: transforma cada string do array em um número.
// `filter(num => num > 0)`: mantém apenas os números que são maiores que zero.
// Agora, `positiveNumbers` conterá apenas os números positivos: [7, 6, 4.6, 12]

// Calculando a soma de todos os números positivos
let soma = positiveNumbers.reduce((acc, num) => acc + num, 0);
// `reduce((acc, num) => acc + num, 0)`: percorre o array somando todos os números.
// - `acc` é o acumulador, que começa em 0 (valor inicial).
// - `num` é cada número do array `positiveNumbers`.
// Agora, `soma` armazenará o valor da soma: 7 + 6 + 4.6 + 12 = 29.6

// Calculando a média dos números positivos
let average = positiveNumbers.length > 0 ? soma / positiveNumbers.length : 0;
// Verificamos se há números positivos (`positiveNumbers.length > 0`), 
// para evitar divisão por zero.
// Se houver números positivos, dividimos a soma pelo número de elementos no array.
// Agora, `average` será: 29.6 / 4 = 7.4

// Exibindo a quantidade de valores positivos no formato solicitado
console.log(`${positiveNumbers.length} valores positivos`);
// `positiveNumbers.length` retorna a quantidade de números positivos (4).
// O resultado exibido no console será: "4 valores positivos"

// Exibindo a média com uma casa decimal
console.log(`${average.toFixed(1)}`);
// `toFixed(1)` arredonda o número para ter apenas uma casa decimal.
// O resultado exibido no console será: "7.4"
