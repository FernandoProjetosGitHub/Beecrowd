let lines = `0
-5
63
230`.split('\n');

let N = [];

for (let i = 0; i < lines.length; i++) {
    const x = parseInt(lines[i]);

    N.push(x);
}
console.log(lines);
console.log(N);

for (let i = 0; i < 10; i++) {

    let j = 19 - i;
    let temp = N[i];
    N[i] = N[j];
    N[j] = temp;

}

for (let i = 0; i <= 19; i++) {
    console.log(`N[${i}] = ${N[i]}`);
}





