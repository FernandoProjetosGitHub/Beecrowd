let lines = `6.0 4.0 2.1`.split('\n');

let value = lines[0].split(" ").map(Number);

let valueA = value[0];
let valueB = value[1];
let valueC = value[2];

if(valueA + valueB > valueC &&
  valueA + valueC > valueB &&
  valueB + valueC > valueA) {

  let perimetro = valueA + valueB + valueC;

  console.log(`Perimetro = ${perimetro.toFixed(1)}`); 

}else{

  let area = ((valueA+valueB) * valueC) / 2 ;

  console.log(`Area = ${area.toFixed(1)}`);
}