let lines = `invertebrado
anelideo
onivoro`.split('\n');
let animais = lines;
                                //0          //1       //2        //3
let arrayDeVertebradosAves = ['vertebrado', 'ave', 'carnivoro', 'onivoro'];
let arrayDeVertebradosMamiferos = ['vertebrado', 'mamifero', 'onivoro', 'herbivoro'];
let arrayDeInvertebradosInsetos = ['invertebrado', 'inseto', 'hematofago', 'herbivoro'];
let arrayDeInvertebradosAnelideo = ['invertebrado', 'anelideo', 'hematofago', 'onivoro'];

if(animais[0] === arrayDeVertebradosAves[0] && 
    animais[1] === arrayDeVertebradosAves[1] &&
    animais[2] === arrayDeVertebradosAves[2]){
        console.log("aguia");
    }else if(animais[0] === arrayDeVertebradosAves[0] && 
        animais[1] === arrayDeVertebradosAves[1] &&
        animais[2] === arrayDeVertebradosAves[3]){
        console.log("pomba");
}if(animais[0] === arrayDeVertebradosMamiferos[0] &&
    animais[1] === arrayDeVertebradosMamiferos[1] &&
    animais[2] === arrayDeVertebradosMamiferos[2] ){
        console.log("homem");
    }else if(animais[0] === arrayDeVertebradosMamiferos[0] &&
        animais[1] === arrayDeVertebradosMamiferos[1] &&
        animais[2] === arrayDeVertebradosMamiferos[3] ){
        console.log("vaca");
}if(animais[0] === arrayDeInvertebradosInsetos[0] &&
    animais[1] === arrayDeInvertebradosInsetos[1] &&
    animais[2] === arrayDeInvertebradosInsetos[2] ){
        console.log("pulga");
    }else if(animais[0] === arrayDeInvertebradosInsetos[0] &&
        animais[1] === arrayDeInvertebradosInsetos[1] &&
        animais[2] === arrayDeInvertebradosInsetos[3] ){
        console.log("lagarta");
}if(animais[0] === arrayDeInvertebradosAnelideo[0] &&
    animais[1] === arrayDeInvertebradosAnelideo[1] &&
    animais[2] === arrayDeInvertebradosAnelideo[2] ){
        console.log("sanguessuga");
    }else if(animais[0] === arrayDeInvertebradosAnelideo[0] &&
        animais[1] === arrayDeInvertebradosAnelideo[1] &&
        animais[2] === arrayDeInvertebradosAnelideo[3] ){
        console.log("minhoca");
    }


