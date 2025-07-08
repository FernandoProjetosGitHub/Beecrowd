  // Divide as linhas da entrada em um array, usando a quebra de linha como separador
  let lines = `4
    Texto #3
    abcABC1
    vxpdylY .ph
    vv.xwfxo.fd`.split("\n");

  // Lê o número de casos da primeira linha
let qtdDeCasos = parseInt(lines[0]);


// Função que simula a entrada de dados como se fosse lida do teclado
function input(entrada, qtdDeCasos) {


  // Array onde serão armazenadas as entradas
  let entradas = [];

  // Percorre as próximas linhas e adiciona as strings tratadas no array
  for (let i = 1; i <= qtdDeCasos; i++) {
    let stringDeEntrada = entrada[i].trim();
    entradas.push(stringDeEntrada);
  }

  // Retorna o array com todas as entradas
  return entradas;
}

// Função que desloca os caracteres da string de acordo com o valor passado
function deslocaPalavraX(palavra, deslocamento, deslocarSomenteLetras = true) {
  // Inicializa string de saída
  let output = "";

  // Percorre cada caractere da palavra
  for (let i = 0; i < palavra.length; i++) {
    // Caractere atual
    let letraAtual = palavra[i];

    // Código ASCII do caractere
    let letraAscii = palavra.charCodeAt(i);

    // Se for para deslocar qualquer caractere, ou se for letra do alfabeto
    if (
        //deslocarSomenteLetras = false
      !deslocarSomenteLetras ||
      (letraAscii >= 65 && letraAscii <= 90) || // Letras maiúsculas
      (letraAscii >= 97 && letraAscii <= 122) // Letras minúsculas
    ) {
      // Aplica o deslocamento
      letraAscii += deslocamento;

      // Converte o código de volta para caractere e adiciona à saída
      output += String.fromCharCode(letraAscii);
    } else {
      // Se não for para deslocar, apenas mantém o caractere original
      output += letraAtual;
    }
  }

  // Retorna a nova palavra modificada
  return output;
}

// Função que inverte a string
function reverterPalavra(palavra) {
  // Divide a string em array, inverte e junta de volta
  return palavra.split("").reverse().join("");
}

// Função que desloca -1 nos caracteres da segunda metade da palavra
function deslocaMetadeDaPalavraX(palavra) {
  // Encontra o ponto do meio da string (arredondado para baixo)
  let metade = Math.floor(palavra.length / 2);

  // Separa a string em duas metades
  let primeiraMetade = palavra.slice(0, metade);
  let segundaMetade = palavra.slice(metade);

  // Aplica deslocamento -1 na segunda metade, incluindo símbolos
  let segundaDeslocada = deslocaPalavraX(segundaMetade, -1, false);

  // Junta a primeira metade com a segunda transformada
  return primeiraMetade + segundaDeslocada;
}

// Obtém as entradas simuladas
let entradas = input(lines, qtdDeCasos);

// Para cada string no array de entradas, executamos a transformação completa
for(let i = 0; i < entradas.length; i++) {
  let entrada = entradas[i];
  // 1ª Fase: desloca cada letra da string em +3 posições no alfabeto (somente letras)
  // Exemplo: "a" → "d", "b" → "e", "X" → "A"
  let primeiraFase = deslocaPalavraX(entrada, 3);

  // 2ª Fase: inverte a string (espelha os caracteres)
  // Exemplo: "abc" → "cba"
  let segundaFase = reverterPalavra(primeiraFase);

  // 3ª Fase: desloca -1 nos caracteres da segunda metade da string (letras e símbolos)
  // Exemplo: "abcDEF" → primeira metade: "abc", segunda metade: "DEF" → "CDE"
  // Resultado final: "abcCDE"
  let terceiraFase = deslocaMetadeDaPalavraX(segundaFase);

  // Exibe o resultado final após as três transformações
  console.log(terceiraFase);
}
