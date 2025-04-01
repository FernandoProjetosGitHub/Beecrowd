// Regra do de cima: i x 2 + 1;
// exemplo: 
// para i  = 0, resulta em : 0 x 2 + 1 = 1;
// para i = 1, resulta em : 1 x 2 + 1 = 3;


// Regra do de baixo: 2 ^ i ;
// exemplo:
// para i = 1, resulta em :  2 ^ 1 = 2;
// para i = 2, resulta em :  2 ^ 2 = 4;
// para i = 3, resulta em :  2 ^ 3 = 8;

let resultado = 0;

for(let index = 0; index < 20; index ++){

    let numerador =  index * 2 + 1;
    let denominador = Math.pow(2, index);
    resultado += numerador / denominador;
    
    
}
console.log(resultado.toFixed(2));

// value = 1
// index = 0
// for
// multiplicador = 0
// 1
// index 1



