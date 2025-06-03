let lines = `3 5
fechou
fechou
clicou
clicou
clicou`.split("\n");

let splitDadosIniciais = lines[0].split(" ");
let valorInicialDeAbas = parseInt(splitDadosIniciais[0]);
let numeroDeClicks = parseInt(splitDadosIniciais[1]);

for(let i = 1; i <= numeroDeClicks; i++){
    let acoes = lines[i];
    
    
    if(acoes === "fechou"){
        valorInicialDeAbas +=1;
    }else if(acoes === "clicou"){
        valorInicialDeAbas -=1;
    }
}
console.log(valorInicialDeAbas);
