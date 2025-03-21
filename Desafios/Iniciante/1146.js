let lines = `5
10
3
0`.split('\n');



for(let contador = 0; contador < lines; contador++){
    
    const x = parseInt(lines[contador]);
    
    if(x === 0){
        break;
    }

    console.log(contador)
    // console.log(`${contador <= lines[0] ? contador +1 : contador +0}`);

    
}