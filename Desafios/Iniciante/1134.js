let lines = `8
1
7
2
2
4`.split('\n');

let computando = false
let alcool = 0;
let gasolina = 0;
let diesel = 0;

for (let contador = 0; contador < lines.length; contador++) {

    const combustiveis = parseInt(lines[contador]);


    if (combustiveis === 4) {
        console.log("MUITO OBRIGADO");
        computando = true
        break;

    }

    if (computando) {
        // console.log(combustiveis)
    } if (combustiveis < 1 && combustiveis > 4) {
        
        computando = true;
        continue;

    } else if (combustiveis === 1) {

        alcool++

    } else if (combustiveis === 2) {

        gasolina++

    } else if (combustiveis === 3) {

        diesel++

    }

}
console.log(`Alcool: ${alcool}`);
console.log(`Gasolina: ${gasolina}`);
console.log(`Diesel: ${diesel}`);