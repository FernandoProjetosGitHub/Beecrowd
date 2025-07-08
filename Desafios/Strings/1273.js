let lines = `3
BOB
TOMMY
JIM
4
JOHN
JAKE
ALAN
BLUE
4
LONGEST
A
LONGER
SHORT
0`.split("\n");

let numbers = [];


// Loop responsável por dividir os inputs em string e números.
// for (let i = 0; i < lines.length; i++) {

//     let number = parseInt(lines[i]);
//     let string = lines[i]

//     if (!isNaN(number)) {
//         numbers.push(number);
//         console.log(number);

//         }else {
//             strings.push(string);
//             console.log(string);
//     }
// }

let numeroDeStrings = lines[0];
let indiceAtual = 1;
let maior = 0;
let strings = [];

while (indiceAtual < lines.length) {

    let itemAtual = lines[indiceAtual];
    // Vai entrar nesse if, somente quando itemAtual for um número
    // quando isso acontecer, é o momento de justificar as strings
    if (!isNaN(itemAtual)) {
        // console.log(maior);
        // console.log(strings);
        let arrayJustificado = justificarDireita(maior,strings);
        exibirStrings(justificarDireita(maior, strings));
        maior = 0;
        strings = [];

        if(itemAtual !== "0") {
            console.log("");
        }
    }

    // Vai entrar nesse if, sempre que o itemAtual for uma palavra
    // quando isso acontecer, eu apenas comparo o número de caracteres
    // com o maior
    if (isNaN(itemAtual)) {
        strings.push(itemAtual);
        if (itemAtual.length > maior) {
            maior = itemAtual.length;
        }
    }
    indiceAtual++;
}

// for (let i = 0; i < lines.length; i++) {
//     let itemAtual = lines
// }

// 
function justificarDireita(TamanhoDaMaiorString, stringsDoBloco) {
    let arrayJustificado = [];
    for (let i = 0; i < stringsDoBloco.length; i++) {

        let stringDoBloco = stringsDoBloco[i];
        let diferencaDeTamanho = TamanhoDaMaiorString - stringDoBloco.length;
        let justificando = " ".repeat(diferencaDeTamanho) + stringDoBloco;
        arrayJustificado.push(justificando)
        
    }
    return arrayJustificado;
}
// justificarDireita(5, ["bob", "tommy", "jim"]);

function justificarEsquerda(TamanhoDaMaiorString, stringsDoBloco) {

    for (let i = 0; i < stringsDoBloco.length; i++) {

        let stringDoBloco = stringsDoBloco[i];
        let diferençaDeTamanho = TamanhoDaMaiorString - stringDoBloco.length;
        let justificando = stringDoBloco + " ".repeat(diferençaDeTamanho);
        console.log(justificando);
        
    }
}
// justificarEsquerda(5, ["bob", "tommy", "jim"]);
function exibirStrings(array) {
    for(let i = 0; i < array.length; i++) {
        let string = array[i];
        console.log(string);
    }
}

// let pessoas = [
//     {
//         nome: "fernando", idade: 34
//     },
//     {
//         nome: "matheus", idade: 22
//     },
//     {
//         nome: "gabriel", idade: 31
//     },
//     {
//         nome: "junior", idade: 33
//     }
// ];
// Em apenas uma linha, imprima o nome das pessoas com idade par.
// Exiba o resultado ordenado pela idade em ordem crescente.
// pessoas.filter(pessoa => {
//     return pessoa.idade % 2 === 0 
// }).sort(function(pessoa1, pessoa2){
//     return pessoa1.idade - pessoa2.idade
// }).forEach(pessoa => {
//     console.log(pessoa.nome);
// })









