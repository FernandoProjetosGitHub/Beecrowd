lines = `666
83
999`.split("\n");

function converterParaNumerosRomanos(lines) {
const matrizDeRomanos = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I']
]

    for(let coluna = 0; coluna < lines.length; coluna++){
        if (lines[coluna].trim() === "") continue;
        let romanosConvertidos = [];
        let numeros = parseInt(lines[coluna]);
        

        for(let linha = 0; linha < matrizDeRomanos.length; linha++){
            while(numeros >= matrizDeRomanos[linha][0]){
                numeros -= matrizDeRomanos[linha][0];
                romanosConvertidos.push(matrizDeRomanos[linha][1]);
            }
            
        }
        console.log(romanosConvertidos.join(""));

    }
}
converterParaNumerosRomanos(lines);