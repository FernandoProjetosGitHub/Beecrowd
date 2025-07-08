let lines = `2
Tpo oCder    
aa bb`.split("\n");

// Criar um loop para iterar todos os casos de teste
// Cada linha de teste recebe um array que deverá ser separado por itens
// Intercalar as letras de cada uma das strings
// Enquanto o tamanho de cada item for correspondente
// quando o tamanho do item maior ultrapassar o menor
// adicionar o restante das letras ao final do resultado.

let numberOfCases = lines[0];
// loop para dividir o array em palavras
for (let indexOfcases = 1; indexOfcases <= numberOfCases; indexOfcases++) {
    // verifica e remove espaços extras desnecessários
    // separa o array em partes
    let currentCase = lines[indexOfcases].trim().split(" ");
    // primeira palavra 
    let firstPartOfCase = currentCase[0].split("");
    // segunda palavra
    let secondPartOfCase = currentCase[1].split("");
    // exibe a função "combinator"
    console.log(combinator(firstPartOfCase, secondPartOfCase));

}

function combinator(firstPartOfCase, secondPartOfCase) {
    // cria um array vazio
    let result = [];
    // let whatsSmallest =  Math.min(firstPartOfCase.length, secondPartOfCase.length);
    // let whatsBiggest =  Math.max(firstPartOfCase.length, secondPartOfCase.length);
    // verifica qual input é o menor e atribui a variável ao input
    let smallerWord = firstPartOfCase.length <= secondPartOfCase.length ? firstPartOfCase : secondPartOfCase;
    // verifica qual input é o maior e atribui a variável ao input
    let biggerWord = firstPartOfCase.length > secondPartOfCase.length ? firstPartOfCase : secondPartOfCase;
    // condição para iniciar a distribuição das letras
    let difference = biggerWord.length - smallerWord.length;

    console.log(difference);
    


    // loop para distribuir as letras
    for (let i = 0; i < smallerWord.length; i++) {
        let lettersOfFirstWord = firstPartOfCase[i];
        let letterOfSecondWord = secondPartOfCase[i];
        result.push(lettersOfFirstWord, letterOfSecondWord);
    }
    // condição para verificar se o numero de letras são equivalentes
    if (result.length % 2 === 0) {
        // continua a distribuição das letras restantes
        // ...array espalha as letras individualmente no array, impedindo concatenação de sinais e etc...
        // result.push(...biggerWord.slice(smallerWord.length));
        if(difference > 0)
        result.push(biggerWord.slice(-difference).join(""));
        // console.log(result);
        
    }
    // retorna a função e une as letras no array
    return result.join("");
}


