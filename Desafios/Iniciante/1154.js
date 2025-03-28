let lines = `34
56
44
23
-2`.split('\n');

let somaDasIdades = 0;
let quantidade = 0;

for(let contador = 0; contador < lines.length; contador ++){
    //Condição de parada
    if(parseInt(lines[contador]) < 0){
        break;
    }
    
    const idade = parseInt(lines[contador]);
    somaDasIdades += idade;
    quantidade ++;
         
}
console.log((somaDasIdades / quantidade).toFixed(2));