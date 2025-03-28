// let lines = `4`.split('\n');

// let n = parseInt(lines[0]);

function fatorialsimples(n) {
    //Condição de parada
    if(n === 1){
        return 1;
    }
    console.log(n)
    //Caso base
    return n * fatorialsimples(n-1)   
    
}
// console.log(fatorialsimples(n));


function somatorio(numero){
    //Condição de parada
    if (numero <= 0 ){
        return 0;
    }
    //Caso base
    return `${numero}, ${somatorio(numero -1)}`;
    
}
// 

function subtratorio(numero){
    //Condição de parada
    if (numero < 0 ){
        return 0;
    }
    //Caso base
    return numero + subtratorio(numero -1);
    
}
// console.log(subtratorio(5));



















function showLetter(word) {
    //Condição de parada
    if(word === ""){
        return;
    }

    //Caso base
    console.log(word[0]);
    let newWord = word.substring(1);

    //Chamada recursiva
    showLetter(newWord);
    
}
// showLetter("fernando");

// deverá exibir os números pares de um núremo até 1
// Ex: dado o número 10 deverá retornar 10, 8, 6, 4, 2, 0
function proximoPar(numero) {
    // Condição de parada
    if(numero < 0){
        return;
    }
    //Caso base
    if(numero % 2 === 0){
        console.log(numero);   
    }
    //Chamada recursiva
    proximoPar(numero );


}
// proximoPar(9);

// Exibir as letras na mesma linha
function showLetterInTheSameLine(word) {
    //Condição de parada
    if(word === "" || word === undefined){
        return;
    }
    if (word.length === 1){
        return word[0];
    }
    return word[0] + showLetterInTheSameLine(word.substring(1));
    
}
const retorno = showLetterInTheSameLine("fernando");
// console.log(retorno);

// Deverá realizar o somatório de um número até 0
// Exemplo recebe 5, retorna 15


let lines = `5`.split('\n');

let contador = parseInt(lines[0]);
// a função receberá um número e deverá exibir a letra a "número" vezes.

// exemplo: teste(5) deverá retornar : a a a a a

function teste(contador, fibonacci) {

    if(contador === 0){
        return "";
    }
    console.log(fibonacci);
    teste(contador-1, fibonacci +1);

}
// teste(contador, 0);
function fibonacci2(fibonacci) {
    //caso de parada
    if(fibonacci === 1){
        return 0;
    }
    // caso de parada 2
    if(fibonacci < 3){
        return 1;
    }
    // caso recursivo
    return fibonacci2(fibonacci - 2) + fibonacci2(fibonacci -1);
}
console.log(fibonacci2(5));