let lines = `6 24`.split('\n');

let value = lines[0].split(" ").map(Number);

let valueA = value[0];
let valueB = value[1];

if(valueB % valueA === 0 || valueA % valueB === 0){
    console.log(`Sao Multiplos`);
}else{
    console.log(`Nao sao Multiplos`);
}