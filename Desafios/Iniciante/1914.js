let lines = `4
Quico PAR Chiquinha IMPAR
9 7
Dami PAR Marcus IMPAR
12 3
Dayran PAR Conrado IMPAR
3 1000000000
Popis PAR Chaves IMPAR
2 7`.split(`\n`);

function teste() {
    //1 , 3, 5
    for (let i = 1; i < lines.length; i +=) {
        let jogador = lines[i];
        let jogada = lines[i + 1];
        console.log(jogador, jogada);
    }
}
teste();


