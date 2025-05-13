let lines = `12
21
41
-41
21
21
81
21
21
21
541
761
781
21
981`.split('\n');

let numerosPares = [];
let numerosImpares = [];
// percorrer todos os valores do array
for (let indice = 0; indice < 15; indice++) {
    let numerosInteiros = parseInt(lines[indice]);
    // verifica se o valor atual é par
    if (numerosInteiros % 2 === 0) {
        // adiciona os valores pares ao array
        numerosPares.push(numerosInteiros);
        // verifica o tamanho do array, garantindo ter somente 5 unidades
        if (numerosPares.length === 5) {
            // percorre os 5 itens do array acima para imprimi-los
            for (let indicePares = 0; indicePares < 5; indicePares++) {
                // imprime os 5 primeiros pares
                console.log(`par[${indicePares}] = ${numerosPares[indicePares]}`);
            }
            // esvazia o array par
            numerosPares.length = 0;
        }
    } else {
        // adiciona os valores impares ao array
        numerosImpares.push(numerosInteiros);
        // verifica o tamanho do array, garantindo ter somente 5 unidades
        if (numerosImpares.length === 5) {
            // percorre os 5 itens do array acima para imprimi-los
            for (let indiceImpares = 0; indiceImpares < 5; indiceImpares++) {
                // imprime os 5 primeiros impares
                console.log(`impar[${indiceImpares}] = ${numerosImpares[indiceImpares]}`);
            }
            // esvazia o array impar
            numerosImpares.length = 0;
        }
    }
}

for (let indiceImpares = 0; indiceImpares < numerosImpares.length; indiceImpares++) {

    console.log(`impar[${indiceImpares}] = ${numerosImpares[indiceImpares]}`);

}


for (let indicePares = 0; indicePares < numerosPares.length; indicePares++) {

    console.log(`par[${indicePares}] = ${numerosPares[indicePares]}`);

}
// let lines = `1
// 3
// 4
// -4
// 2
// 3
// 8
// 2
// 5
// -7
// 54
// 76
// 789
// 23
// 98`.split('\n');