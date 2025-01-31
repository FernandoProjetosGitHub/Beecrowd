let lines = `10.3 203.0 5.0`.split('\n');

let value = (lines[0].split(" ")).map(Number);

let valueA = (value[0]);
let valueB = (value[1]);
let valueC = (value[2]);
let delta = (Math.pow(valueB, 2) -4 * valueA * valueC);

if(valueA === 0 || delta < 0){
    console.log("Impossivel calcular");
}else {
    let r1 = (-valueB + Math.sqrt(delta)) / (2 * valueA);
    let r2 = (-valueB - Math.sqrt(delta)) / (2 * valueA);

    console.log(`R1 = ${r1.toFixed(5)}\nR2 = ${r2.toFixed(5)}`)
}
