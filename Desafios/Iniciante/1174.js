let lines = `0
-5
63
-8.5`.split('\n');

for(let i =0; i <= 100; i++){
    const x = parseFloat(lines[i]);
    if(x <= 10){
        console.log(`A[${i}] = ${(x).toFixed(1)}`);
        
    } 

}