let lines = `2
4 3
11 2`.split('\n');

let N = parseInt(lines[0]);



for (let splitter = 1; splitter <= N; splitter++) {

    let [x, y] = lines[splitter].split(" ").map(Number);

    x = x % 2 === 0 ? x + 1 : x + 0;

    let somaDeImpares = 0;

    for (let i = 0; i < y; i++) {

        let impares = x + (i * 2);
        somaDeImpares += impares;

    }
    console.log(somaDeImpares);

}
