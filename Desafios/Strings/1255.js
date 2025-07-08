


function contarNumeroDeRepeticoes(palavra) {
    //Ex: contarNumeroDeRepeticoes("abacate")
    //Retorna: a = 3, b = 1, c = 1, t = 1, e = 1.
    //Use apenas letras minúsculas.
    let imput = palavra;

    let imputSplit = imput.split("");

    let contadorDeA = 0;
    let contadorDeB = 0;
    let contadorDeC = 0;
    let contadorDeD = 0;
    let contadorDeE = 0;
    let contadorDeF = 0;
    let contadorDeG = 0;
    let contadorDeH = 0;
    let contadorDeI = 0;
    let contadorDeJ = 0;
    let contadorDeK = 0;
    let contadorDeL = 0;
    let contadorDeM = 0;
    let contadorDeN = 0;
    let contadorDeO = 0;
    let contadorDeP = 0;
    let contadorDeQ = 0;
    let contadorDeR = 0;
    let contadorDeS = 0;
    let contadorDeT = 0;
    let contadorDeU = 0;
    let contadorDeV = 0;
    let contadorDeW = 0;
    let contadorDeX = 0;
    let contadorDeY = 0;
    let contadorDeZ = 0;

    for (let i = 0; i < imputSplit.length; i++) {
        let captandoLetra = imputSplit[i];

        if (captandoLetra === "a") contadorDeA++;


        if (captandoLetra === "b") contadorDeB++;


        if (captandoLetra === "c") contadorDeC++;


        if (captandoLetra === "d") contadorDeD++;


        if (captandoLetra === "e") contadorDeE++;


        if (captandoLetra === "f") contadorDeF++;


        if (captandoLetra === "g") contadorDeG++;


        if (captandoLetra === "h") contadorDeH++;


        if (captandoLetra === "i") contadorDeI++;


        if (captandoLetra === "j") contadorDeJ++;


        if (captandoLetra === "k") contadorDeK++;


        if (captandoLetra === "l") contadorDeL++;


        if (captandoLetra === "m") contadorDeM++;


        if (captandoLetra === "n") contadorDeN++;


        if (captandoLetra === "o") contadorDeO++;


        if (captandoLetra === "p") contadorDeP++;


        if (captandoLetra === "q") contadorDeQ++;


        if (captandoLetra === "r") contadorDeR++;


        if (captandoLetra === "s") contadorDeS++;


        if (captandoLetra === "t") contadorDeT++;


        if (captandoLetra === "u") contadorDeU++;


        if (captandoLetra === "v") contadorDeV++;


        if (captandoLetra === "w") contadorDeW++;


        if (captandoLetra === "x") contadorDeX++;


        if (captandoLetra === "y") contadorDeY++;


        if (captandoLetra === "z") contadorDeZ++;


    }
    let alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
    let ocorrencias = [];
    for(let k = 0; k < alfabeto.length; k++){
        ocorrencias[k] = 0;
    }
    
    for(let j = 0; j < imputSplit.length; j++){
        let letra = imputSplit[j];
        let indice = alfabeto.findIndex(letraAtual => letraAtual === letra);
        ocorrencias[indice] = ocorrencias[indice]+= 1; 
    }
    // console.log(
    //     alfabeto.split("")[0]
    // );
    return ocorrencias;
    // console.log(ocorrencias);
}


// console.log(contarNumeroDeRepeticoes("abacate"));
// contarNumeroDeRepeticoes("abacate");


function contarNumeroDeRepeticoes(palavra) {
    //Ex: contarNumeroDeRepeticoes("abacate")
    //Retorna: a = 3, b = 1, c = 1, t = 1, e = 1.
    //Use apenas letras minúsculas.
    let imput = palavra.toLowerCase();

    let imputSplit = imput.split("");

    let alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");

    //Ocorrencias representam um array de vezes em que cada letra do alfabeto apareceu.
    let ocorrencias = [];
    for(let j = 0; j < alfabeto.length; j++){
        //Todas as letras começam com 0 ocorrencias.
        ocorrencias[j] = 0;
    }
    
    //Loop para incrementar a ocorrencia de cada letra.
    for(let k = 0; k < imputSplit.length; k++){
        let letra = imputSplit[k];
        let indice = alfabeto.findIndex(letraAtual => letraAtual === letra);
        //verificando se o indice corresponde as 26 letras do alfabeto
        if(indice >= 0)
        ocorrencias[indice] = ocorrencias[indice]+= 1; 
    }
    
    return ocorrencias;
    
}

function retornarAsLetrasQueMaisOcorreram(entrada) {
    // Assume que o primeiro elemento é o maior para iniciar a comparação.
    let maior = entrada[0];
    // Itera a partir do segundo elemento do array de contagens.
    for(let i = 1; i < entrada.length; i++){
        // Se a contagem atual (input[i]) for maior que a 'maior' contagem encontrada até agora,
        // atualiza 'maior' para essa nova contagem.
        if(entrada[i] > maior){
            maior = entrada[i];
        }
    }
     // Cria um array com todas as letras do alfabeto.
    // Este array será usado para encontrar o índice correspondente a cada letra.
    let alfabeto = "abcdefghijklmnopqrstuvwxyz".split("");
    // Imprime no console o valor da maior contagem encontrada.
    // Nota: Esta função, como está, não retorna as letras, apenas a contagem.
    let output = "";
    
    for(let j = 0; j < input.length; j++){
        if(entrada[j] === maior){
            output += alfabeto[j];
            
        }
    }
    return output;
    
}

// console.log(contarNumeroDeRepeticoes("computers account for only 5% of the country's commercial electricity consumption."));
let ocorrencias = contarNumeroDeRepeticoes("frequency letters");
// console.log(ocorrencias);

// Chama a função para encontrar a maior contagem dentro do array 'ocorrencias'.
// O resultado (a maior contagem) será impresso no console pela própria função.
let saida = retornarAsLetrasQueMaisOcorreram(ocorrencias);
console.log(saida);