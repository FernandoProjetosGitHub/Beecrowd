let lines = `73
`.split('\n');

let N = parseInt(lines[0]);

for(let contador = 1; contador <= N; contador++){
    if(contador % 2 === 0){
        console.log(`${contador}^2 = ${Math.pow(contador, 2)}`);
    }else{

    }

}