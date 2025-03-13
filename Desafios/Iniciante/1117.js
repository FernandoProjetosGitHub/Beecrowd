let lines = `-3.5
3.5
11.0
10.0`.split('\n').map(Number);

let validNotes = 0; // Contador para notas válidas
let sum = 0; // Soma das notas válidas

for(let counter = 0; counter < lines.length; counter ++ ){ // Loop através de todas as linhas

    const linesArray = lines[counter]; // Pega a nota atual
    
    if(linesArray < 0 || linesArray > 10){ // Verifica se a nota é inválida
        console.log(`nota invalida`); // Imprime mensagem de nota inválida
        
    }else {
        validNotes ++; // Incrementa o contador de notas válidas
        sum += linesArray; // Adiciona a nota válida à soma
        if(validNotes === 2){ // Verifica se já foram lidas duas notas válidas
            const media = (sum / 2).toFixed(2); // Calcula a média das duas notas válidas
            console.log (`media = ${media}`); // Imprime a média
        }
    }
        
}
