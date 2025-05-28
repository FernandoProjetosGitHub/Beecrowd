let lines = `1 2
1 3`.split("\n");

//Regras : o sapo só consegue sobreviver se a diferença de altura entre canos consecutivos for de
//no máximo, a altura do pulo do sapo. 

let divisorDeDadosPrimeiraLinha = lines[0].split(" ");
let alturaDosCanos = lines[1].split(" ");

let alturaDoPulo = parseInt(divisorDeDadosPrimeiraLinha[0]);
let numeroDeCanos = parseInt(divisorDeDadosPrimeiraLinha[1]);

for (let i = 0; i < numeroDeCanos - 1; i++) {
    const canoAtual = parseInt(alturaDosCanos[i]);
    const canoSeguinte = parseInt(alturaDosCanos[i + 1]);
    // obtem o tamanho do número, independente do sinal;
    const diferencaEntreOsCanos = Math.abs(canoAtual - canoSeguinte);
    if (diferencaEntreOsCanos > alturaDoPulo) {
        console.log("GAME OVER");
        return;
        console.log("asdasd");
    }
}
console.log("YOU WIN");
