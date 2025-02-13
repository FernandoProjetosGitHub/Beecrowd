let lines = `4520.00`.split('\n');

let value = parseFloat(lines[0]);
let incomeTax = 0

if(value > 4500.00){
    incomeTax += (value - 4500.00) * 0.28;
    value = 4500.00;
    
}if(value > 3000.00){
    incomeTax += (value - 3000.00) * 0.18;
    value = 3000.00;
}if(value > 2000.00){
    incomeTax += (value - 2000.00) * 0.08;
    
}if(value <= 2000.00){
    console.log(`Isento`)
}else{
    console.log(`R$ ${incomeTax.toFixed(2)}`);
}
// Converte o valor de entrada para um número decimal (float).
// let value = parseFloat(lines[0]);

// // Inicializa a variável que armazenará o imposto de renda a ser pago.
// let incomeTax = 0;

// // Verifica se o valor ultrapassa R$ 4500.00, pois essa parte paga 28% de imposto.
// if (value > 4500.00) {
//     // Calcula o imposto sobre a parte que excede R$ 4500.00
//     incomeTax += (value - 4500.00) * 0.28;
    
//     // Como já tributamos a parte acima de R$ 4500.00, reduzimos o valor para 4500.00
//     value = 4500.00;
// }

// // Verifica se o valor está acima de R$ 3000.00, pois essa parte paga 18% de imposto.
// if (value > 3000.00) {
//     // Calcula o imposto sobre a parte entre R$ 3000.01 e R$ 4500.00
//     incomeTax += (value - 3000.00) * 0.18;

//     // Como já tributamos a parte acima de R$ 3000.00, reduzimos o valor para 3000.00
//     value = 3000.00;
// }

// // Verifica se o valor está acima de R$ 2000.00, pois essa parte paga 8% de imposto.
// if (value > 2000.00) {
//     // Calcula o imposto sobre a parte entre R$ 2000.01 e R$ 3000.00
//     incomeTax += (value - 2000.00) * 0.08;
// }

// // Se o valor for até R$ 2000.00, a pessoa está isenta de imposto.
// if (value <= 2000.00) {
//     console.log(`Isento`);  // Exibe "Isento" no console.
// } else {
//     // Se houver imposto a pagar, exibe o valor formatado com duas casas decimais.
//     console.log(`R$ ${incomeTax.toFixed(2)}`);
// }
