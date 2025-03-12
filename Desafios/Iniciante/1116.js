let lines = `3
3 -2
-8 0
0 8`.split('\n');

let n = parseInt(lines[0]);

for (let splitter = 1; splitter <= n; splitter++) {

    const [lines0, lines1] = lines[splitter].split(" ").map(Number);

    if (lines1 === 0) {
        console.log("divisao impossivel");

    } else {
        console.log((lines0 / lines1).toFixed(1));
    }
}








