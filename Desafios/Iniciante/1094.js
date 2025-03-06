let lines = `10
10 C
6 R
15 S
5 C
14 R
9 C
6 R
8 S
5 C
14 R`.split('\n'); 

let quantity = parseInt(lines[0]);

let totalDeCobaias = 0;

let totalCoelhos = 0;
let totalRatos = 0;
let totalSapos = 0;

let percentualCoelhos = 0;
let percentualRatos = 0;
let percentualSapos = 0;

// let counter = 1
// while(counter <= quantity){
//     ...

//     counter++;

// }

for(let counter = 1; counter <= quantity; counter ++) { 

    let cobaias = lines[counter];

    cobaias = lines[counter].split(" ");

    totalDeCobaias = totalDeCobaias + parseInt(cobaias[0]);


    if(cobaias[1] === "C"){

        totalCoelhos = totalCoelhos + parseInt(cobaias[0]);

    }if(cobaias[1] === "R"){

        totalRatos = totalRatos + parseInt(cobaias[0]);

    }if(cobaias[1] === "S"){

        totalSapos = totalSapos + parseInt(cobaias[0]);

    };

};


console.log(`Total: ${totalDeCobaias} cobaias`);
console.log(`Total de coelhos: ${totalCoelhos}`);
console.log(`Total de ratos: ${totalRatos}`);
console.log(`Total de sapos: ${totalSapos}`);
console.log(`Percentual de coelhos: ${((totalCoelhos * 100)/ totalDeCobaias).toFixed(2)} %`);
console.log(`Percentual de ratos: ${((totalRatos * 100)/ totalDeCobaias).toFixed(2)} %`);
console.log(`Percentual de sapos: ${((totalSapos * 100)/ totalDeCobaias).toFixed(2)} %`);

