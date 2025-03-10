let lines = `5 2
6 3
5 0`.split('\n');

for(let splitter = 0; splitter < lines.length; splitter++){
    // Divide a linha atual em um array de strings
    let arraySplitter = lines[splitter].split(" ");

    // Atribui os dois números a m e n
    let m = parseInt(arraySplitter[0]);
    let n = parseInt(arraySplitter[1]);

    // Verifica se m ou n são menores ou iguais a 0, se sim, interrompe o loop
    if(m <= 0 || n <= 0){
        break;
    }

    // Determina os valores menor e maior entre m e n
    let lowValue = Math.min(m, n);
    let highValue = Math.max(m, n);

    // Inicializa um array para armazenar a sequência e uma variável para a soma
    let sequencia = [];
    let sum = 0;

    // Loop para criar a sequência de números entre lowValue e highValue
    for(let sumSplitter = parseInt(lowValue); sumSplitter <= parseInt(highValue); sumSplitter++){
        // Adiciona o número atual à sequência
        sequencia.push(sumSplitter);
        
        // Adiciona o número atual à soma
        sum += sumSplitter; 
    }
    
    // Imprime a sequência e a soma no formato especificado
    console.log(`${sequencia.join(" ")} Sum=${sum}`);
}
