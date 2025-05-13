let lines = `3`.split('\n');

let valorDeT = parseInt(lines[0]);
let valorExibido = 0;
for(let i = 0; i < 1000; i++ ){

    console.log(`N[${i}] = ${valorExibido}`);
    
    // Regra para calcular próximo valor a ser exibido
    valorExibido ++;
    if(valorExibido === valorDeT) {
        valorExibido = 0;
    }  
}

// for (let i = 0 ; i < 1000; i++) {
//     let valorDoVetor = i % valorDeT;
//     console.log(`N[${i}] = ${valorDoVetor}`);
    
// }

// Exibir do valor de lines > 0 
// EX. 
// N[0] = 3
// N[1] = 2
// N[2] = 1
// N[3] = 0

// for(let i = 0; i < 10; i++) {
    
//     if( i % 4 === 0) {
//         valorDeT = 4;
//     }

//     valorDeT --;
    
//     console.log(`N[${i}] = ${valorDeT}`);
      
// }