let lines = `3 2
1
2 3
1
3 1
2`.split('\n');

let grenal = 0
let vitoriasInter = 0
let vitoriasGremio = 0
let empate = 0

for (let i = 0; i < lines.length; i++) {

    const line = lines[i];

    if( line === "1"){
        continue;
    }
    if( line === "2"){
        break;
    
    }
    // Tenho certeza que é um grenal
    const [golsInter, golsGremio] = lines[i].split(" ").map(elem => parseInt(elem));
    grenal ++;
    if(golsInter > golsGremio){
        vitoriasInter ++
    }else if(golsGremio > golsInter){
        vitoriasGremio ++
    }else{
        empate ++
    }
    console.log("Novo grenal (1-sim 2-nao)");
    
}
console.log(`${grenal} grenais`);
console.log(`Inter:${vitoriasInter}`);
console.log(`Gremio:${vitoriasGremio}`);
console.log(`Empates:${empate}`);

// Se O Gremio tem o mesmo número de vitórias que o Inter, exibe empate.

if(vitoriasInter === vitoriasGremio){
    console.log("Nao houve vencedor")
}else{
    console.log(`${vitoriasInter > vitoriasGremio ? "Inter venceu mais" : "Gremio venceu mais"}`);
    
}





