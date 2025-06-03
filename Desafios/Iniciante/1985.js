let lines = `5
1001 500
1005 300
1003 23
1002 52
1004 44`.split("\n");

let qtdProdutosComprados = parseInt(lines[0]);
let arrayDeProdutos = [
    {codigo: 1001, valor: 1.50},
    {codigo: 1002, valor: 2.50},
    {codigo: 1003, valor: 3.50},
    {codigo: 1004, valor: 4.50},
    {codigo: 1005, valor: 5.50},
]

let resultado = 0;

for (let i = 1; i <= qtdProdutosComprados; i++) {
    let separandoLinesAposQtdDeProdutos = lines[i].split(" ");

    let produtoSelecionado = parseInt(separandoLinesAposQtdDeProdutos[0]);
    let quantidadeComprada = parseFloat(separandoLinesAposQtdDeProdutos[1]);

    let produto = arrayDeProdutos.find(item => item.codigo === produtoSelecionado);

    if (produto) {
        resultado += produto.valor * quantidadeComprada;
    }
}

console.log(resultado.toFixed(2));