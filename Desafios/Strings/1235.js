let lines = `5
I ENIL SIHTHSIREBBIG S
LEVELKAYAK
H YPPAHSYADILO
ABCDEFGHIJKLMNOPQRSTUVWXYZ
VOD OWT SNEH HCNERF EGDIRTRAP A DNA SE`.split("\n");

let numberOfCases = lines[0];

for(let indexOfCases = 1; indexOfCases <= numberOfCases; indexOfCases++) {

    let currentCase = lines[indexOfCases];

    let halfOfCurrentCase = lines[indexOfCases].length / 2;
    
    let firstPart = currentCase.split("").slice(0, halfOfCurrentCase).reverse().join("");
    let secondPart = currentCase.split("").slice(halfOfCurrentCase).reverse().join("");

    let result = (firstPart + secondPart);
    
    console.log(result);
}



