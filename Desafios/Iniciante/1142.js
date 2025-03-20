let lines = `7`.split('\n');


let value = parseInt(lines[0]);
let contador = 1;


for(let adicionar = 0; adicionar < value; adicionar++ ){
    
    console.log(`${contador} ${contador +1} ${contador +2} PUM`);
    contador += 4;
}