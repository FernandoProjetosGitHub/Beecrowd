let lines = `10
18`.split('\n');

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);

let menorValor = Math.min(x, y) +1;
let maiorValor = Math.max(x, y);

for(let contador = menorValor; contador < maiorValor; contador ++) {
    
    if(contador % 5 === 2 || contador % 5 === 3){
        console.log(contador);
    }

}