let lines = `100
200`.split('\n');

let x = parseInt(lines[0]);
let y = parseInt(lines[1]);
let sum = 0;

let lowValue = Math.min(x,y);
let highValue = Math.max(x,y);


for(let counter = lowValue; counter <= highValue; counter++){
    
    if(counter % 13 !== 0){
        sum += counter;
    }
}
console.log(sum);

