let lines = `7
-5
6
-4
12`.split('\n');

let numbers = lines.slice(0, -1).map(Number);

let evenNumber = 0;

for (let num of numbers) {

    if (num % 2 === 0) {

        evenNumber++;
    }

}
console.log(`${evenNumber} valores pares`);
