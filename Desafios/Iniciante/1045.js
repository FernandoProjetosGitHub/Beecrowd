let lines = `7.0 5.0 7.0`.split('\n');

let value = lines[0].split(" ").map(Number);
// Ordena os valores para garantir que o maior lado seja valueA
value.sort((a,b) => b - a);

let valueA = value[0];
let valueB = value[1];
let valueC = value[2];

if(valueA >= (valueB + valueC)){
    // se A ≥ B+C, apresente a mensagem: NAO FORMA TRIANGULO
    console.log(`NAO FORMA TRIANGULO`);

}else {
    if((valueA * valueA) === (valueB * valueB) + (valueC * valueC)){
    //se A2 = B2 + C2, apresente a mensagem: TRIANGULO RETANGULO
    console.log(`TRIANGULO RETANGULO`);   
    }else if((valueA * valueA) > (valueB * valueB) + (valueC * valueC)){
    //se A2 > B2 + C2, apresente a mensagem: TRIANGULO OBTUSANGULO
    console.log(`TRIANGULO OBTUSANGULO`);
    }else{
    //se A2 < B2 + C2, apresente a mensagem: TRIANGULO ACUTANGULO através do else.
    console.log(`TRIANGULO ACUTANGULO`);
    }
    if(valueA === valueB && valueB === valueC) {
    //se os três lados forem iguais, apresente a mensagem: TRIANGULO EQUILATERO
    console.log(`TRIANGULO EQUILATERO`);
    }else if (valueA === valueB || valueA === valueC || valueB === valueC) {
    //se apenas dois dos lados forem iguais, apresente a mensagem: TRIANGULO ISOSCELES
    console.log(`TRIANGULO ISOSCELES`);      
    }
}
