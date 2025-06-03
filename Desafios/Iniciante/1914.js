let lines = `4
Quico PAR Chiquinha IMPAR
9 7
Dami PAR Marcus IMPAR
12 3
Dayran PAR Conrado IMPAR
3 1000000000
Popis PAR Chaves IMPAR
2 7`.split(`\n`);

let qtdDeCasos = parseInt(lines[0]);

let jogadas = [
    {jogador1:["Quico", "PAR"], jogador2: ["Chiquinha", "IMPAR"]},
    {jogador1: ["Dami", "PAR"], jogador2: ["Marcus", "IMPAR"]},
    {jogador1: ["Dayran", "PAR"], jogador2: ["Conrado", "IMPAR"]},
    {jogador1: ["Popis", "PAR"], jogador2: ["Chaves", "IMPAR"]},
];




for (let i = 1; i <= qtdDeCasos; i++) {
    let jogada = jogadas[i].split(" ");
    let jogador1 = jogada[0];
    let jogador2 = jogada[2];
    let jogada1 = jogada[1];
    let jogada2 = jogada[3];

    let confrontos = jogadas.find(item => item.jogador1[1] === )
}