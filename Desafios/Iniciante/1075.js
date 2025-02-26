let lines = `13`.split('\n');

let N = parseInt(lines[0]);

for (let counter = 0; counter <= 10000; counter++) {
    if (counter % N === 2) {
        console.log(counter)
    }
    
}