let lines = `2
pedra
pedra
ataque
papel`.split("\n");

let confrontos = parseInt(lines[0]);

// for(let i = 1; i <= confrontos; i++){
//     let jogador1 = "";
//     let jogador2 = "";
//     let escolhas = lines[i];
//     let escolhasemNumeros = i
//     if(escolhasemNumeros % 2 !== 0 ){
//         jogador1 += escolhas;
//     }else if(escolhasemNumeros % 2 === 0){
//         jogador2 += escolhas;
//     }
//     console.log(jogador1, jogador2);
// }

//Solução com o for andando de 2 em 2.

// for(let i = 1; i < lines.length; i+=2){
//     let jogador1 = lines[i];
//     let jogador2 = lines[i + 1];
//     console.log(jogador1);
//     console.log(jogador2);
    // console.log(determinarVencedor(jogador1, jogador2));
// }


// Solução com o for andando de 1 em 1.
let jogador1 = "";
let jogador2 = "";
//Função que carrega as regras para a resolução.
function determinarVencedor(jogador1, jogador2) {
    
    // if(jogador1 === "ataque" && jogador2 === "pedra" || 
    //    jogador1 === "ataque" && jogador2 === "papel" ||
    //    jogador1 === "pedra" && jogador2 === "papel") 
    //     return "Jogador 1 venceu";

    // if(jogador1 === "pedra" && jogador2 === "ataque" || 
    //    jogador1 === "papel" && jogador2 === "ataque" ||
    //    jogador1 === "papel" && jogador2 === "pedra") 
    //     return "Jogador 2 venceu";

    let casoGeral = {
        ataquepedra: "Jogador 1 venceu",
        ataquepapel: "Jogador 1 venceu",
        pedrapapel: "Jogador 1 venceu",
        pedraataque: "Jogador 2 venceu",
        papelataque: "Jogador 2 venceu",
        papelpedra: "Jogador 2 venceu",
        papelpapel: "Ambos venceram",
        pedrapedra: "Sem ganhador",
        ataqueataque: "Aniquilacao mutua"
    }
    
    return casoGeral[jogador1+jogador2];

    if(jogador1 === "papel" && jogador2 === "papel")
        return "Ambos venceram";

    if(jogador1 === "pedra" && jogador2 === "pedra")
        return "Sem ganhador";

    if(jogador1 === "ataque" && jogador2 === "ataque")
        return "Aniquilacao mutua";
}

for(let i = 1; i < lines.length; i++){
    if(i % 2 !== 0){
        jogador1 = lines[i];
    
    }else{
        jogador2 = lines[i];
        //Verificar regra.
        console.log(determinarVencedor(jogador1, jogador2)); 
    }
}

