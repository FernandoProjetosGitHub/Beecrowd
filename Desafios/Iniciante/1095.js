let i = 1;
let j = 60;

while (j >= 0) {
    console.log(`I=${i} J=${j}`);
        j -= 5;
        i += 3;      
}

for(let contador = j; contador >= 0; contador -=5){
    console.log(contador,i);
    i +=3
 
}
