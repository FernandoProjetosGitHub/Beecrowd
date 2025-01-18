let lines = `217 14 6`.split('\n');
// transforma a string em um array separado por "espaço"
let transform = lines[0].split(" "); 
// atribui a variável maior ABC ao primeiro valor do array [transform]
let maiorABC = parseInt(transform[0]);
// o loop "for" começa com o indice = 1 pelo segundo item do array [transform]
for(let indice = 1; indice < transform.length; indice ++){
// a variável valorAtual recebe o indice ocupando o valor do array [transform] indicado no loop acima    
    let valorAtual = parseInt(transform[indice]);
// faz a comparação dos valores indicados nas variáveis acima para decidir qual número tem o maior valor e assim
// atribui a variável maior ABC um novo valor, caso tenha sucesso na comparação.    
    if(valorAtual > maiorABC){
        maiorABC = valorAtual
    }
}
// imprime o valor da maior variável.
console.log(`${maiorABC} eh o maior`)