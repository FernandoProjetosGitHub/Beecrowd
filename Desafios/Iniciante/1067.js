let lines = `8`.split('\n');

let value = parseInt(lines[0]);

for (let contador = 1; contador <= value; contador++) {

    let odd = contador;

  if(odd % 2 !== 0){
    console.log(odd);
  }

}

