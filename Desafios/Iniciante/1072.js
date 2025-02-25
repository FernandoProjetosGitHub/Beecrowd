let lines = `4
14
123
10
-25`.split('\n');

let N = parseInt(lines[0]);

let countIn = 0
let countOut = 0

for (let percorre = 1; percorre <= N; percorre++) {

    let intervalos = parseInt(lines[percorre]);

    if (intervalos >= 10 && intervalos <= 20) {

        countIn++

    } else {

        countOut++

    }

}
console.log(`${countIn} in`);

console.log(`${countOut} out`);
