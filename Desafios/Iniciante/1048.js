let lines = `2000.00`.split('\n');

let value = parseFloat(lines[0]);

if (value > 0 && value <= 400.00){
    let porcent = 15
    let bonus = (value * 15) / 100;
    console.log(`Novo salario: ${(value + bonus).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(bonus).toFixed(2)}`);
    console.log(`Em percentual: ${porcent} %`);
}else if (value >= 400.01 && value <= 800.00) {
    let porcent = 12
    let bonus = (value * 12) / 100;
    console.log(`Novo salario: ${(value + bonus).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(bonus).toFixed(2)}`);
    console.log(`Em percentual: ${porcent} %`);
}else if (value >= 800.01 && value <= 1200.00) {
    let porcent = 10
    let bonus = (value * 10) / 100;
    console.log(`Novo salario: ${(value + bonus).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(bonus).toFixed(2)}`);
    console.log(`Em percentual: ${porcent} %`);
}else if (value >= 1200.01 && value <= 2000) {
    let porcent = 7
    let bonus = (value * 7) / 100;
    console.log(`Novo salario: ${(value + bonus).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(bonus).toFixed(2)}`);
    console.log(`Em percentual: ${porcent} %`);
}else{
    let porcent = 4
    let bonus = (value * 4) / 100;
    console.log(`Novo salario: ${(value + bonus).toFixed(2)}`);
    console.log(`Reajuste ganho: ${(bonus).toFixed(2)}`);
    console.log(`Em percentual: ${porcent} %`);
}

