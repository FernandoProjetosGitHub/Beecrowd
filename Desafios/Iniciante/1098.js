let i = 0;
let j = 1;
let adicional = 0;

for(let contador = 0; contador < 33; contador++){

    if( contador > 0 && contador % 3 === 0 ){
        
        i = parseFloat((parseFloat(i) + 0.2).toFixed(1));
        // j = parseFloat(parseFloat(j) + 0.2).toFixed(1)
        adicional += 0.2;
        j = parseFloat((parseFloat(1) + adicional).toFixed(1));
    }
   console.log(`I=${i} J=${j}`);
    
   j += parseFloat(1);
}