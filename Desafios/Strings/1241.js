let lines = `4
56234523485723854755454545478690 78690
5434554 543
1243 1243
54 64545454545454545454545454545454554`.split("\n");

let numberOfCases = lines[0];

for(let indexOfCases = 1; indexOfCases <= numberOfCases; indexOfCases++) {

    let currentCase = lines[indexOfCases].split(" ");

    let valueA = currentCase[0];
    let valueB = currentCase[1];

    let verifying = valueA.slice(-valueB.length);
    // console.log(verifying);
    
    console.log(verifying === valueB ? "encaixa" : "nao encaixa");
    
}