let lines = `3
galopeira
galopeeeeeeeeeeeeeeeeeira
galopeeira`.split("\n");

let qtdDeCasos = lines[0];

let tempoGasto = 0.01;

for(let i = 1;i <= qtdDeCasos; i++){
    let galopeiras = lines[i];
    console.log(`${parseFloat(galopeiras.length * tempoGasto).toFixed(2)}`);
}