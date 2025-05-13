let lines = `10
1 2 3 4 -5 6 7 8 9 10`.split('\n');

let tamanhoDoVetor = parseInt(lines[0]);

let vetorX = lines[1].split(" ").map(Number);

let menor = vetorX[0];

let posicao = 0

for(let i = 1; i < vetorX.length; i++ ){
    let valorAtual = vetorX[i];
    if(valorAtual < menor){
        menor = valorAtual;
        posicao = i
    }
}
console.log(`Menor valor: ${menor}\nPosicao: ${posicao}`);






