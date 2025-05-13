let lines = `3
1
20`.split('\n');

let valorDeX = parseInt(lines[0]);

let valorDeZ = 0

// Encontrar o valorDeZ
for(let i = 1; i < lines.length; i++ ){

    let verificandoZ = parseInt(lines[i]);

    if(verificandoZ > valorDeX){

        valorDeZ = verificandoZ;

        break;
    }
    
}

let valorAcumulativo = valorDeX;
let valor = valorDeX + 1;
let numeroDeIteracoes = 1;

while(valorAcumulativo < valorDeZ){
    valorAcumulativo += valor;
    valor ++;
    numeroDeIteracoes ++;
}
console.log(numeroDeIteracoes);


function fadeEffect() {
    imgs.classList.remove("fade-active");
    titles.classList.remove("fade-active");
    captions.classList.remove("fade-active");

    imgs.classList.add("fade-transition");
    titles.classList.add("fade-transition");
    captions.classList.add("fade-transition");

    setTimeout(() => {
        imgs.classList.add("fade-active");
        titles.classList.add("fade-active");
        captions.classList.add("fade-active");
    }, 50);
}

