let lines = `This is a dancing sentence
  This   is         a
dancing   sentence  
aaaaaaaaaaa
z`.split("\n");


function salvandoOsEspacos(string) {

  let posicoesDosEspacos = [];

  for (let i = 0; i < string.length; i++) {

    if (string[i] === " ") {

      posicoesDosEspacos.push(i);

    }
  }
  return posicoesDosEspacos;
}

// console.log(salvandoOsEspacos(linesComoString));

function removendoOsEspacos(string) {

  let stringSemEspaco = string.replace(/\s/g, "");

  return stringSemEspaco;

}

// console.log(removendoOsEspacos(linesComoString));

function transformandoEmDancante(string) {

  let transformandoString = [];

  for (let i = 0; i < string.length; i++) {

    if (i % 2 === 0) {

      transformandoString.push(string[i].toUpperCase());

    } else {
      // transformandoString[i].toLowerCase();
      transformandoString.push(string[i].toLowerCase())
    }

  }
  return transformandoString.join("");
}

// Essa função recebe uma string e retorna os caracteres em branco para suas devidas posições
function devolvendoOsEspacos(string, indices) {
  let resultado = [];
  let arrayDeIndices = indices.sort();
  // i = 0  "a"
  // i = 1  "a b"
  // i = 2  "a bc"
  // i = 3  ""

  console.log(` a antes while :`);
  return "";
  
  for (let i = 0; i < string.length; i++) {

    let letra = string[i];

    if (arrayDeIndices[0] === i) {
      let adicionarEmI = 0
      while (arrayDeIndices.length > 0 && arrayDeIndices[0] == i + adicionarEmI) {
        resultado.push(" ");
        arrayDeIndices.shift();
        adicionarEmI ++;
      }
      
      arrayDeIndices = arrayDeIndices.map(indice => indice -= 1);
      
      console.log(`apos while : ${arrayDeIndices}`);
    }

    // Adiciona a letra sempre
    resultado.push(letra);

    // Se o índice atual (original) estiver na lista, adiciona espaço depois da letra
    // if (indices.includes()) {
    //   resultado.push(" ");
    // }

    // contadorOriginal++; // avança o contador original
  }

  return resultado.join("");
}

let s = salvandoOsEspacos("  This   is         a")
devolvendoOsEspacos("Thisisa", s);
//Deve retornar : "a b cde"
function input(entrada) {

  let entradas = [];

  for (let i = 0; i < entrada.length; i++) {
    let stringDeEntrada = entrada[i];
    entradas.push(stringDeEntrada);
  }
  return entradas;

}

let entradas = input(lines);

for (let i = 0; i < entradas.length; i++) {

  let entrada = entradas[i];

  let salvando = salvandoOsEspacos(entrada);

  let removendo = removendoOsEspacos(entrada);

  let transformada = transformandoEmDancante(removendo);

  // let devolvendo = devolvendoOsEspacos(transformada, salvando);

  // console.log(devolvendo);

}

// let lines = `This is a dancing sentence
//   This   is         a  dancing   sentence  
// aaaaaaaaaaa
// z`.split("\n");


// for(let i = 0; i < lines.length; i++) {
//     let line = lines[i];
//     let output = "";
    
//     let upercase = true;
//     for(let indiceLetra = 0; indiceLetra < line.length; indiceLetra++){
//         let letra = line[indiceLetra];
//         let asciiLetra = letra.charCodeAt(0);
//         if(asciiLetra >= 65 && asciiLetra <= 90 ||
//             asciiLetra >= 97 && asciiLetra <= 122
//         ){
//             if(upercase){
//                 output += letra.toUpperCase();
//             }else {
//                 output += letra.toLowerCase();
//             }
//             upercase = !upercase;
//         }else {
//             output += " ";
//         }
//     }
//     console.log(output);
// }



