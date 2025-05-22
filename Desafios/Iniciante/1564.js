let lines = `0
1
0
2
100
0`.split("\n");

for(let i = 0; i < lines.length; i++) {

    let reclamacoes = parseInt(lines[i]);
    if(reclamacoes === 0) {
        console.log("vai ter copa!")
    }else if(reclamacoes > 0 && reclamacoes <= 100){
        console.log("vai ter duas!")
    }
    
}
