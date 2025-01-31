let lines = `3
115380
2819311
23456`.split('\n');
                  //0, 1, 2, 3, 4, 5, 6, 7, 8, 9
const arrayLeds = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6]

const row = parseInt(lines[0]);

for(let index = 1; index <= row; index ++){
    
    const itemAtual = lines[index];
                            
    let itemAtualComoArray = itemAtual.split("").map(Number);
    
    let totalLeds = itemAtualComoArray.reduce((soma, digito) => soma + arrayLeds[digito], 0);

    console.log(`${totalLeds} leds`);
}