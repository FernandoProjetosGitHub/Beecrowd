let lines = `--*
caw caw
*--
caw caw
caw caw`.split("\n");

let arrayDoCorvo = [
    ["--*", 1],
    ["*--", 4],
    ["caw caw"],
];


for(let i = 0; i < lines.length; i++){
    let resultado = 0;
    let sorteioDeWesteros = lines[i];
    let resultadoDoCorvo = arrayDoCorvo.find(piscada => piscada[0] === sorteioDeWesteros);

    if(resultadoDoCorvo) {
        resultado += resultadoDoCorvo[1];
        console.log(resultado);
        

    } if(resultadoDoCorvo === `caw caw`){
        continue;

    }else if(resultadoDoCorvo === `caw caw
        caw caw`.split("\n")){
        resultado = 0;
        console.log(resultado);
        
        break;
    }
}
