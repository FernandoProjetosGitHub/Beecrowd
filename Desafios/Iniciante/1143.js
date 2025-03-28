let lines = `5`.split('\n');

let value = parseInt(lines[0]);
let contador = 1;

for(let adicionar = 0; adicionar < value; adicionar ++){

    console.log(`${contador} ${Math.pow(contador, 2)} ${Math.pow(contador, 3)}`);
    contador +=1;
}
