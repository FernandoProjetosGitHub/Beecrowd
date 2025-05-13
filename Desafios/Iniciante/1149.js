let lines = `3 -1 0 -2 2`.split('\n');

let splitter = lines[0].split(" ").map(elem => parseInt(elem));

let valueA = splitter[0];
let valueN = 0;

for (let contador = 1; contador < splitter.length; contador++) {

    let temp = splitter[contador];
    
    if(temp > 0){

        valueN = temp;
        break;
    }
}
let total = 0;

for(let i = 0; i <= valueN -1; i++){

    let formula = valueA + i;

    total += formula;

}
console.log(total);




