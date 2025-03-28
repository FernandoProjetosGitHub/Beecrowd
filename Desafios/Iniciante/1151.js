let lines = `5`.split('\n');


// transforma o array de string em um array de numero inteiro
let fibonacci = parseInt(lines[0]);
// declara duas variáveis, a,b com os valores de 0 e 1
let a = 0, b = 1;
// cria um array vazio
let resultado = [];
// loop for pra percorrer o valor do imput
for(let adicionar = 0; adicionar < fibonacci; adicionar++){
    // adiciona o valor de 0 ao array vazio
    resultado.push(a);
    // declara uma nova variavel que vai somar o valor das variáveis a e b
    let temp = a + b;
    // torna o valor da variável a em b, sendo assim a = 1
    a = b;
    // b se torna a soma de a + b = 2
    b = temp;
    
}
// transforma o array em uma string separando os itens com um " " <-- espaço em branco
console.log(resultado.join(" "));


