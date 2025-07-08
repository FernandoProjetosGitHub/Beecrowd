let lines = `Flowers Flourish from France
Sam Simmonds speaks softly
Peter pIckEd pePPers
truly tautograms triumph
this is NOT a tautogram
*
asjdjasdjas`.split("\n")

// for que vai percorrer os indices do imput(array lines).
for(let indiceDaSentenca = 0; indiceDaSentenca < lines.length; indiceDaSentenca++) {
    //variável para identificar as frases do array de imput.
    let sentence = lines[indiceDaSentenca];
    //variavel para identificar as palavras de cada sentença.
    let words = sentence.split(" ");
    // condição de parada, se a sentença por "*" deve parar o loop e encerrar o programa.
    if(sentence === "*") break;
    // variavel para identificar a primeira letra da primeira palavra do array de palavras.
    let firstLetter = words[0][0].toLowerCase();
   

    let tautogram = true;

    //loop responsável por percorrer todas as palavras de cada sentença
    for(let indiceDaPalavra = 0; indiceDaPalavra < words.length; indiceDaPalavra++) {
        // variável para identificar cada palavra separadamente do array de palavras.
        let word = words[indiceDaPalavra];
        // variável para identificar cada primeira letra de todas as palavras, do array de palavras.
        let letter = word[0].toLowerCase();

       
        // condição de saída, verifica se a primeira letra da palavra atual é igual
        // as primeiras letras das palavras seguintes.
        if(letter !== firstLetter)
            tautogram = false
        
    }
    
    console.log(tautogram ? "Y" : "N");
}

lines.slice(0, lines.indexOf("*")).forEach(sentence => {
    let firstLetters = sentence.split(" ").map(word => word[0].toLowerCase());
    console.log(firstLetters.every(letter => letter === firstLetters[0]) ? "Y" : "N");
});






