let i = 1;
let j = 7;
for(let x = 0; x < 15; x++){
    
    if(x !== 0 && x % 3 === 0){
        i += 2
        j = 7
        
    }
    console.log(`I=${i} J=${j}`);
    j -= 1
}

