let lines = `-3.5
3.5
10.01
10.0`.split('\n');

let validNotes = 0;
let sum = 0;

for (let counter = 0; counter < lines.length; counter++) {

    // const note = lines[counter]; 
    const note = parseFloat(lines[counter]); 
    
    if (note < 0 || note > 10) {
        console.log("nota invalida");
    } else {
        validNotes++;
        sum += note;
        
        if (validNotes === 2) {
            const media = parseFloat((sum / 2).toFixed(2));
            console.log(`media = ${media}`);
            break; 
        }
    }
}

