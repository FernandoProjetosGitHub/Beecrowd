let lines = `0
-5
63
0`.split('\n');



for(let i = 0; i < 10; i++){

    let x = parseInt(lines[i]);
    
    x = x <= 0 ? console.log(`X[${i}] = 1`) : console.log(`X[${i}] = ${x}`);
    
}