let lines = `3
0
4
2`.split('\n');

let numeroDeCasos = parseInt(lines[0]);

function calculandoFib(fibonacci) {
    if (fibonacci === 0) return 0;
    if (fibonacci === 1) return 1;

    let a = 0, b = 1, resultado;
    for (let i = 2; i <= fibonacci; i++) {
        resultado = a + b;
        a = b;
        b = resultado;
    }
    return resultado;
}

for (let indice = 1; indice <= numeroDeCasos; indice++) {

    const fibonacci = parseInt(lines[indice]);
    console.log(`Fib(${fibonacci}) = ${calculandoFib(fibonacci)}`);
    
}