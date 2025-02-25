let lines = `4
-5
0
3
-4`.split('\n');

let numbers = lines.map(Number)

for(let checagem = 1; checagem <= numbers[0]; checagem++){
    
    let num = numbers[checagem]

    if(num === 0){
        console.log(`NULL`);
    }else if (num < 0 && num % 2 === 0){
        console.log(`EVEN NEGATIVE`);
    }else if (num > 0 && num % 2 === 0){
        console.log(`EVEN POSITIVE`);
    }else if (num > 0 && num % 2 !== 0){
        console.log(`ODD POSITIVE`);
    }else{
        console.log(`ODD NEGATIVE`);
    }
    
}
