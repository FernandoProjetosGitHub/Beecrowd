let lines = `5`.split("\n");

let quantidadeDeHo = parseInt(lines[0]);
let arrayDeHo = [];
let contador = 0;
let ho = "Ho";
for(let i = 0; i < quantidadeDeHo; i++) {
    arrayDeHo.push(ho)
    contador++;
    if(contador === quantidadeDeHo){
    console.log(`${arrayDeHo.join(" ")}!`);
    }
}
