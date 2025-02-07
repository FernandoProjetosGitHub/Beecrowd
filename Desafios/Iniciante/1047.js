let lines = `7 8 9 10`.split('\n');

let value = lines[0].split(" ").map(Number);

let startHour = value[0];
let startMin = value[1];
let endHour = value[2];
let endMin = value[3];
let day = 24;
let totalMin = 60;

if(startHour === endHour && startMin === endMin) {
    console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`);
}else if(startHour === endHour && startMin > endMin){
    let min = (totalMin - startMin) + endMin;
    console.log(`O JOGO DUROU 24 HORA(S) E ${min} MINUTO(S)`);
}else{
    let min = startMin - endMin;
    console.log(`O JOGO DUROU 24 HORA(S) E ${min} MINUTO(S)`);
}if(startHour > endHour && startMin > endMin) {
    let hour = (day - startHour) + endHour;
    let min = (totalMin - startMin) + endMin;
    console.log(`O JOGO DUROU ${hour} HORA(S) E ${min} MINUTO(S)`);
}else if(endHour > startHour && endMin > startMin) {
    let hour = startHour - endHour;
    let min = endMin - startMin;
    console.log(`O JOGO DUROU ${hour} HORA(S) E ${min} MINUTO(S)`);
}else if(startHour > endHour && endMin > startMin) {
    let hour = (day - startHour) + endHour;
    let min = endMin - startMin;
    console.log(`O JOGO DUROU ${hour} HORA(S) E ${min} MINUTO(S)`);
}else{
    let hour = startHour - endHour;
    let min = (totalMin - startMin) + endMin;
    console.log(`O JOGO DUROU ${hour} HORA(S) E ${min} MINUTO(S)`);
}
