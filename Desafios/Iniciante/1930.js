lines = `2 4 3 2
6 6 6 6
2 2 2 2`.split("\n");

function calculaTomadasParaVariosCasos(lines) {
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === "") continue;
        const somaDeTomadas = lines[i].split(" ").map(Number).reduce((valorAcumulado, elementoAtual) => {
            return valorAcumulado + elementoAtual;
        }, 0);
        console.log((somaDeTomadas) - 3);
    }
}
calculaTomadasParaVariosCasos(lines);
