let lines = `5
1001 500
1005 300
1003 23
1002 52
1004 44`.split("\n");

let qtdProdutosComprados = parseInt(lines[0]);
let arrayDeProdutos = [
    [1001, 1.50],
    [1002, 2.50],
    [1003, 3.50],
    [1004, 4.50],
    [1005, 5.50],
]

let resultado = 0;

for (let i = 1; i <= qtdProdutosComprados; i++) {
    let separandoLinesAposQtdDeProdutos = lines[i].split(" ");

    let produtoSelecionado = parseInt(separandoLinesAposQtdDeProdutos[0]);
    let quantidadeComprada = parseFloat(separandoLinesAposQtdDeProdutos[1]);

    let produto = arrayDeProdutos.find(item => item[0] === produtoSelecionado);

    if (produto) {
        resultado += produto[1] * quantidadeComprada;
    }
}

console.log(resultado.toFixed(2));