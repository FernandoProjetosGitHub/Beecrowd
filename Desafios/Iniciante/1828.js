lines = `3
papel pedra
lagarto tesoura
Spock Spock`.split("\n");

let quantidadeDePartidas = parseInt(lines[0]);
let arrayDeConfrontos = lines.slice(1);
let contador = 1;

for(let i = 0; i < quantidadeDePartidas; i++) {

    let confrontosDiretos = arrayDeConfrontos[i];
    if(confrontosDiretos === "papel pedra" || 
        confrontosDiretos === "papel Spock" ||
        confrontosDiretos === "lagarto papel" ||
        confrontosDiretos === "lagarto Spock" ||
        confrontosDiretos === "Spock tesoura" ||
        confrontosDiretos === "Spock pedra" ||
        confrontosDiretos === "pedra tesoura" ||
        confrontosDiretos === "pedra lagarto" ||
        confrontosDiretos === "tesoura papel" ||
        confrontosDiretos === "tesoura lagarto"){
        console.log(`Caso #${contador}: Bazinga!`);
        contador++;
    }else if (confrontosDiretos === "pedra papel" ||
        confrontosDiretos === "Spock papel" ||
        confrontosDiretos === "tesoura Spock" ||
        confrontosDiretos === "pedra Spock" ||
        confrontosDiretos === "tesoura pedra" ||
        confrontosDiretos === "lagarto pedra" ||
        confrontosDiretos === "papel tesoura" ||
        confrontosDiretos === "lagarto tesoura" ||
        confrontosDiretos === "papel lagarto" ||
        confrontosDiretos === "Spock lagarto" ){
        console.log(`Caso #${contador}: Raj trapaceou!`);
        contador++;
    }else if (confrontosDiretos === "Spock Spock"  || 
        confrontosDiretos === "papel papel" ||
        confrontosDiretos === "tesoura tesoura" ||
        confrontosDiretos === "lagarto lagarto" ||
        confrontosDiretos === "pedra pedra") {
        console.log(`Caso #${contador}: De novo!`);
        contador++;
    }
    
}
// const lines = `3
// papel pedra
// lagarto tesoura
// Spock Spock`.split("\n");

// const quantidadeDePartidas = parseInt(lines[0]);
// const confrontos = lines.slice(1);

// // Regras de quem vence quem
// const vitorias = {
//     tesoura: ["papel", "lagarto"],
//     papel: ["pedra", "Spock"],
//     pedra: ["lagarto", "tesoura"],
//     lagarto: ["Spock", "papel"],
//     Spock: ["tesoura", "pedra"]
// };

// for (let i = 0; i < quantidadeDePartidas; i++) {
//     const [sheldon, raj] = confrontos[i].split(" ");

//     let resultado;
//     if (sheldon === raj) {
//         resultado = "De novo!";
//     } else if (vitorias[sheldon].includes(raj)) {
//         resultado = "Bazinga!";
//     } else {
//         resultado = "Raj trapaceou!";
//     }

//     console.log(`Caso #${i + 1}: ${resultado}`);
// }
