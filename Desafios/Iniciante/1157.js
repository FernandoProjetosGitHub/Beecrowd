let lines = `6`.split('\n');

let n = parseInt(lines[0]);

for(let divisor = 1; divisor <= n; divisor++){
    
    if(n % divisor === 0) {
        
        console.log(divisor);

    }

}