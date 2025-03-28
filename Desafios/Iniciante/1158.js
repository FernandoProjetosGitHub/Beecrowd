let lines = `2
4 3
11 2`.split('\n');

let N = parseInt(lines[0]);



for(let splitter = 1; splitter <= N; splitter++){
    
    let [x, y] = lines[splitter].split(" ").map(Number);
    
    y = y % 2 === 0 ? y + 1 : y + 0;
    
    
    for(let i = 1; i <= x; i++){
        
        
        let somaDeImpares = 0;
        if(y % 2 !== 0){
            let impares = y + i*2;
            somaDeImpares += impares
            
            console.log(impares);
        }
        
    }
    
}
