let lines = `-14 21 7`.split('\n');

let valueArray = (lines[0].split(" ").map(Number));

let valueA = (valueArray[0]);
let valueB = (valueArray[1]);
let valueC = (valueArray[2]);

if (valueA < 0 && 
    valueA < valueB && 
    valueA < valueC &&
    valueB < valueC) {
    console.log(`${valueA}\n${valueB}\n${valueC}`);
}else if(
    valueB < 0 &&
    valueB < valueA &&
    valueB < valueC &&
    valueC < valueA) {  
    console.log(`${valueB}\n${valueC}\n${valueA}`);   
}else if(
    valueC < 0 &&
    valueC < valueA &&
    valueC < valueB &&
    valueB < valueA) {
    console.log(`${valueC}\n${valueB}\n${valueA}`);
}else if(
    valueA < 0 &&
    valueA < valueC &&
    valueA < valueB &&
    valueC < valueB) {
    console.log(`${valueA}\n${valueC}\n${valueB}`);
}else if(
    valueC < 0 &&
    valueC < valueA &&
    valueC < valueB &&
    valueA < valueB) {
    console.log(`${valueC}\n${valueA}\n${valueB}`);    
}else{
    console.log(`${valueB}\n${valueA}\n${valueC}`);
}
console.log(`\n${valueA}\n${valueB}\n${valueC}`);