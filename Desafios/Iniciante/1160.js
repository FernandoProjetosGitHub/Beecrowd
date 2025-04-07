
let lines = `6
100 150 1.0 0
90000 120000 5.5 3.5
56700 72000 5.2 3.0
123 2000 3.0 2.0
100000 110000 1.5 0.5
62422 484317 3.1 1.0`.split('\n');

// Primeiro valor indica quantos casos serão processados
let numeroDeCasos = lines[0]; // aqui não usamos, mas está disponível

// Loop que percorre os casos de teste (cada linha com 4 valores)
for (let i = 1; i < lines.length; i++) {

    // Separa os dados da linha e transforma em números decimais (inclusive as taxas)
    let separadorDeDados = lines[i].split(" ").map(e => parseFloat(e));
    
    // Atribui cada valor à sua respectiva variável
    let popA = separadorDeDados[0];
    let popB = separadorDeDados[1];
    let taxaA = separadorDeDados[2];
    let taxaB = separadorDeDados[3];

    // Chama a função principal para calcular quantos anos até A ultrapassar B
    const resultado = quantosAnosParaUltrapassar(popA, popB, taxaA, taxaB);

    // Exibe o resultado no console
    console.log(resultado);
}

// Função que simula o crescimento de 1 ano
function crescerUmAno(popA, popB, taxaA, taxaB) {
    let novaPopA = Math.floor(popA * (1 + taxaA / 100)); // crescimento com arredondamento para baixo
    let novaPopB = Math.floor(popB * (1 + taxaB / 100));

    return [novaPopA, novaPopB]; // retorna as novas populações
}

// Função que calcula em quantos anos a cidade A ultrapassa B
function quantosAnosParaUltrapassar(popA, popB, taxaA, taxaB) {
    let anos = 0; // contador de anos

    // enquanto A for menor ou igual a B e não tiver passado 100 anos
    while (popA <= popB && anos <= 100) {
        const [novaA, novaB] = crescerUmAno(popA, popB, taxaA, taxaB); // simula 1 ano
        popA = novaA;
        popB = novaB;
        anos++; // soma 1 ano
    }

    // se passou de 100 anos, retorna a frase especial
    if (anos > 100) {
        return "Mais de 1 seculo.";
    } else {
        return `${anos} anos.`; // caso contrário, retorna os anos normais
    }
}
