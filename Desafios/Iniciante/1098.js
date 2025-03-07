let i = 0
let j = 1

for(let x = 0; x < 33; x++){
    if( i >= 0 && i< 2){
        i += (0.2).toFixed(1)
        i -= parseFloat(0.8).toFixed(1)
        j+= (0.2).toFixed(1)
    }
    console.log(`I=${i} J=${j}`);
    i += 1
    
    
}