let lines = `3
6
5
28`.split('\n');

let numeroDeCasos = parseInt(lines[0]);


for(let adicionandoNumeros = 1; adicionandoNumeros <= numeroDeCasos; adicionandoNumeros++){

    let numerosPerfeitos = parseInt(lines[adicionandoNumeros]);
    // Reseta o valor de acumulador para repetir a soma
    let acumulador = 0
    
    for(let verificandoPerfeito = 1; verificandoPerfeito < numerosPerfeitos; verificandoPerfeito++){
        // Verifica se há divisores positivos e adiciona ao acumulador
        if(numerosPerfeitos % verificandoPerfeito === 0){

            acumulador += verificandoPerfeito;
            
        }
        
    }
    // Caso o valor adicionado seja identico ao valor inicial, o número é perfeito
    console.log(`${numerosPerfeitos} ${acumulador === numerosPerfeitos ? "eh" : "nao eh"} perfeito`);

    
}