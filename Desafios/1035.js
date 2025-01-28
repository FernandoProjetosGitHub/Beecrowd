let lines = `2 3 2 6`.split('\n');

// B > C  
// D > A
// C + D > A + B
// C, D > 0
// A % 2 === 0

let values = lines[0].split(" ").map(Number);

let [valueA, valueB, valueC, valueD] = values;


if (
    valueB > valueC && 
    valueD > valueA &&
    valueC + valueD > valueA + valueB &&
    valueC >=0 &&
    valueD >=0 &&
    valueA % 2 === 0
) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}



