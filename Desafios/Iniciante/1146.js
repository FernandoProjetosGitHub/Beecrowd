let lines = `5
10
3
0`.split('\n');

// loop for para percorrer os valores de 
for (let contador = 0; contador < lines.length; contador++) {
    // declara uma nova variavel carregando os indices do loop, com a finalidade em percorrer todos os itens do array
    let x = parseInt(lines[contador]);
    //condição de parada
    if (x === 0) {
        break;
    }
    //cria um array vazio
    let resultado = [];
    //loop com o intuito de adicionar os valores entre 1 e o número correspondente ao indice atual
    for(let adicionar = 1; adicionar <= x; adicionar ++){
        //adiciona o valor do indice percorrido ao array criado recentemente
        resultado.push(adicionar);
    }
    //imprime o valor do array em formato de string separados por espaço em branco
    console.log(resultado.join(' '));
}
