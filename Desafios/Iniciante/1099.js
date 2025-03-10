// Divide a string de entrada em um array de linhas
let lines = `7
4 5
13 10
6 4
3 3
3 5
3 4
3 8`.split('\n');

// A primeira linha contém o número de casos de teste
let N = lines[0];

// Loop através de cada caso de teste
for(let splitter = 1; splitter <= lines[0]; splitter++){

    // Divide a linha atual em dois números
    let arraySplitter = lines[splitter].split(" ");

    // Atribui os dois números a x e y
    let x = arraySplitter[0];
    let y = arraySplitter[1];

    // Determina os valores menor e maior entre x e y
    let lowValue = Math.min(x, y);
    let highValue = Math.max(x, y);

    // Inicializa a soma dos números ímpares
    let sumOdd = 0;

    // Loop através dos números entre menor e maior (exclusivo)
    for(let odd = lowValue + 1; odd < highValue; odd++){

        // Se o número for ímpar, adiciona à soma
        if(odd % 2 !== 0){
            sumOdd += odd;
        }
    }
    // Imprime a soma dos números ímpares
    console.log(sumOdd);
}