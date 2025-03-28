let lines = `3 99`.split('\n');
// cria duas variáveis, referentes ao valor da variável inicial, separando os dois indices 
// e atribuindo a cada um deles os respectivos nomes das variaveis criadas, 
// além de atribuir ao array o valor parsefloat, no caso, criando um novo array com a caracteristica numérica do (Number).
let [x, y] = lines[0].split(" ").map(Number);

// começa com um array vazio
let output = [];
// "quebra de linha" = espaço em branco para separar os caracteres
let quebraDeLinha = 0;
// loop para adicionar e distrubuir o valor de y
for (let adicionar = 1; adicionar <= y; adicionar++) {
    // adiciona o valor de y ao array vazio
    output.push(adicionar);
    // adiciona um espaço vazio para separar os numeros do array
    quebraDeLinha ++;
    // condição para exibir de 3 em 3 números
    if(quebraDeLinha === x){
        // variavel responsável por transformar o array em uma string separada por espaços
        const linha = output.join(" ");
       // exibe a variável 
        console.log(linha);
        // retorna o array vazio, para receber os futuros valores de y
        output = [];
        // garante que o valor seja referente ao primeiro indice, assim retornando o fluxo aos 3 caracteres iniciais do array
        quebraDeLinha = 0;
    }

}
if(output.length > 0){ 

    console.log(output.join(" "));

}


// //---//
// x = 3;
// y = 4;
// output = [];
// quebraDeLinha = 0;

// //for()
// adicionar = 1;
// output = [1];
// quebraDeLinha = 1;
// // if
// //for
// adicionar = 2;
// output[1,2];
// quebraDeLinha = 2;
// //if
// //for
// adicionar = 3;
// output[1, 2, 3];
// quebraDeLinha = 3;
// //if
// linha = "1 2 3"
// console.log("1 2 3");
// output = [];
// quebraDeLinha = 0;
// //for
// adicionar = 4;
// output[4];
// quebraDeLinha = 1;
// //if
// //for
// adicionar = 5;





