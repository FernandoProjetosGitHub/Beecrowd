let lines = `-5
0
-3
-4
12`.split('\n');

let value = lines.slice(0, -1).map(Number);
//Começa um contador em 0
let even = 0, odd = 0, positive = 0, negative = 0;
//Para cada elemento do array, faz uma verificação, caso condiza adiciona +1
value.forEach(num => {
    if (num % 2 === 0) even++;
    else odd++;
    
    if (num > 0) positive++;
    else if (num < 0) negative++;
});

console.log(`${even} valor(es) par(es)`);
console.log(`${odd} valor(es) impar(es)`);
console.log(`${positive} valor(es) positivo(s)`);
console.log(`${negative} valor(es) negativo(s)`);





let valueEven = lines.map(Number).filter(num => num % 2 === 0);
let valueOdd = lines.map(Number).filter(num => num % 2 !== 0);
let valuePositive = lines.map(Number).filter(num => num > 0);
let valueNegative = lines.map(Number).filter(num => num < 0);

console.log(`${valueEven.length} valor(es) par(es)`);
console.log(`${valueOdd.length} valor(es) impar(es)`);
console.log(`${valuePositive.length} valor(es) positivo(s)`);
console.log(`${valueNegative.length} valor(es) negativo(s)`);