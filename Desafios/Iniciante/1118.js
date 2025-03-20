let lines = `-3.5
3.5
11.0
10.0
4
1
8.0
9.0
2`.split('\n');

let x = 0;
let validNotes = 0;
let sum = 0;

let estouFazendoAMedia = true;

for (let counter = 0; counter < lines.length; counter++) {

    const note = parseFloat(lines[counter]);

    // Primeiro caso:
    if (estouFazendoAMedia) {
        //Se nota for inválida, exiba nota inválida
        if (note < 0 || note > 10) {
            console.log("nota invalida")
        } else {

            validNotes++
            sum += note;

        }
        // console.log(validNotes);

        if (validNotes === 2) {
            const media = parseFloat(sum / 2);
            console.log(`media = ${media}`);
            validNotes = 0;
            sum = 0;
            estouFazendoAMedia = false
            console.log("novo calculo (1-sim 2-nao)");
            continue;
        }
    }

    if (!estouFazendoAMedia) {

        if (note !== 1 && note !== 2) {

            console.log("novo calculo (1-sim 2-nao)");

            estouFazendoAMedia = false;
        } else if (note === 1) {
            estouFazendoAMedia = true;
        } else if (note === 2) {
            break;
        }
    }

};
