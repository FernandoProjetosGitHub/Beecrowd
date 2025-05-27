// lines = `3
// papel pedra
// lagarto tesoura
// Spock Spock`.split("\n");

// let quantidadeDePartidas = parseInt(lines[0]);
// let arrayDeConfrontos = lines.slice(1);
// console.log(arrayDeConfrontos);

// let contador = 1;

// for(let i = 0; i < quantidadeDePartidas; i++) {

//     let confrontosDiretos = arrayDeConfrontos[i];
//     if(confrontosDiretos === "papel pedra" || 
//         confrontosDiretos === "papel Spock" ||
//         confrontosDiretos === "lagarto papel" ||
//         confrontosDiretos === "lagarto Spock" ||
//         confrontosDiretos === "Spock tesoura" ||
//         confrontosDiretos === "Spock pedra" ||
//         confrontosDiretos === "pedra tesoura" ||
//         confrontosDiretos === "pedra lagarto" ||
//         confrontosDiretos === "tesoura papel" ||
//         confrontosDiretos === "tesoura lagarto"){
//         console.log(`Caso #${contador}: Bazinga!`);
//         contador++;
//     }else if (confrontosDiretos === "pedra papel" ||
//         confrontosDiretos === "Spock papel" ||
//         confrontosDiretos === "tesoura Spock" ||
//         confrontosDiretos === "pedra Spock" ||
//         confrontosDiretos === "tesoura pedra" ||
//         confrontosDiretos === "lagarto pedra" ||
//         confrontosDiretos === "papel tesoura" ||
//         confrontosDiretos === "lagarto tesoura" ||
//         confrontosDiretos === "papel lagarto" ||
//         confrontosDiretos === "Spock lagarto" ){
//         console.log(`Caso #${contador}: Raj trapaceou!`);
//         contador++;
//     }else if (confrontosDiretos === "Spock Spock"  || 
//         confrontosDiretos === "papel papel" ||
//         confrontosDiretos === "tesoura tesoura" ||
//         confrontosDiretos === "lagarto lagarto" ||
//         confrontosDiretos === "pedra pedra") {
//         console.log(`Caso #${contador}: De novo!`);
//         contador++;
//     }

// }

lines = `3
papel pedra
lagarto tesoura
Spock Spock`.split("\n");

let resultado = "";


let regras = [
    { nome: "tesoura", ganhade: ["papel", "lagarto"] },
    { nome: "papel", ganhade: ["pedra", "Spock"] },
    { nome: "pedra", ganhade: ["tesoura", "lagarto"] },
    { nome: "lagarto", ganhade: ["Spock", "papel"] },
    { nome: "Spock", ganhade: ["pedra", "tesoura"] }
];

let quantidadeDePartidas = parseInt(lines[0]);
let contador = 1;

for (let i = 0; i < quantidadeDePartidas; i++) {
    let linhaComoArray = lines[i + 1].split(" ");
    let sheldon = linhaComoArray[0];
    let raj = linhaComoArray[1];
    // Regra do empate
    if (sheldon === raj) {
        resultado = "De novo!";
        console.log(`Caso #${contador}: ${resultado}`);
        contador++;

    }
    // Regra quando alguém ganha
    else if (sheldon !== raj) {
        let regraAtual = regras.find((regra) => {
            if (regra.nome === sheldon) {
                return true;
            }
        })

        if (regraAtual.ganhade.includes(raj)) {
            resultado = "Bazinga!";
            console.log(`Caso #${contador}: ${resultado}`);
            contador++;
        } else {
            resultado = "Raj trapaceou!";
            console.log(`Caso #${contador}: ${resultado}`);
            contador++;
        }

    }
}


