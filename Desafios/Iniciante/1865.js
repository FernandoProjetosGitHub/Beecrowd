let lines = `4
Hulk 5000
Tony 1000
Thor 50
Steve 500`.split("\n");

let qtdDeCasos = parseInt(lines[0]);
let heroiDigno = "";


for(let i = 1; i <= qtdDeCasos; i++){

    let splitHeroisEForca = lines[i].split(" ");
    let heroiAtual = splitHeroisEForca[0];
    
    if(heroiAtual === "Thor"){
        console.log("Y");
        
    }else {
        console.log("N");
    }
}

