let lines = `2200
1020
2022
2002`.split('\n');

let contador = 0
while (lines[contador] !== "2002") {
    console.log("Senha Invalida");
    contador ++
}
console.log("Acesso Permitido");

// for (let percorre = 0; percorre < lines.length; percorre++) {
//     let arrayPercorrido = parseInt(lines[percorre]);
   
//     if(arrayPercorrido !== 2002){
//         console.log("Senha Invalida");
//     }
//     return "Acesso Permitido"
    
// }
