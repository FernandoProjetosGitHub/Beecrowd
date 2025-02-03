let lines = `9.0 4.0 8.5 9.0`.split('\n');

let nExame = parseFloat(lines[1])

let value = (lines[0].split(" "));

let n1 = parseFloat(value[0] * 2);
let n2 = parseFloat(value[1] * 3);
let n3 = parseFloat(value[2] * 4);
let n4 = parseFloat(value[3] * 1);
const media = (n1 + n2 + n3 + n4) / 10;

console.log(`Media: ${media.toFixed(1)}`);


if(media >= 7.0){
    console.log("Aluno aprovado.");
}else if(media < 5.0){
    console.log("Aluno reprovado.");
}else if(media >= 5.0 && media <= 6.9){
    console.log("Aluno em exame.");
    console.log(`Nota do exame: ${nExame.toFixed(1)}`);
    let mediaFinal = (media + nExame) / 2;
    if(mediaFinal >= 5.0){
        console.log("Aluno aprovado.");
        console.log(`Media final: ${mediaFinal.toFixed(1)}`);
    }else{
        console.log("Aluno reprovado.");
        console.log(`Media final: ${mediaFinal.toFixed(1)}`);
    }
}
    

