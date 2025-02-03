let lines = `-10.0 3.0`.split('\n');

let value = (lines[0].split(" "));

let x = parseFloat(value[0]);
let y = parseFloat(value[1]);

if(x > 0.0 && y > 0.0){
    console.log("Q1");
}else if(x > 0.0 && y < 0.0){
    console.log("Q4");
}else if(x < 0.0 && y > 0.0){
    console.log("Q2")
}else if(x < 0.0 && y < 0.0){
    console.log("Q3")
}else if(x === 0.0 && y === 0.0){
    console.log("Origem")
}else if (x === 0.0) {
    console.log("Eixo Y");
}else {
    console.log("Eixo X");
}