let lines = `7 8 9 10`.split('\n');

let value = lines[0].split(" ").map(Number);

let startHour = value[0];
let startMin = value[1];
let endHour = value[2];
let endMin = value[3];
let day = 24;
let totalMin = 60;
let hours, minutes;

//Equal hours
if(startHour === endHour && startMin === endMin) {
    console.log(`O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)`);
}
//Equal hours but diferent minutes"
else if(startHour === endHour){
    if (startMin < endMin){
        minutes = (endMin - startMin);
        console.log(`O JOGO DUROU 0 HORA(S) E ${minutes} MINUTO(S)`);
    }else{
        minutes = (totalMin - startMin) + endMin;
        console.log(`O JOGO DUROU 23 HORA(S) E ${minutes} MINUTO(S)`)
    }
}

//Starting hour higher than ending hour.
else if (startHour > endHour){
    hours = (day - startHour) + endHour;

    if (startMin > endMin){
        hours -= 1;
        minutes = (totalMin - startMin) + endMin;
    } else {
        minutes = endMin - startMin;
    }
    console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
    
}

//Starting hour lower than ending hour.
else {
    
    hours = endHour - startHour;

    if (startMin > endMin){
        hours -= 1;
         minutes = (totalMin - startMin) + endMin;
        
    } else {
         minutes = endMin - startMin;
        
    }
    console.log(`O JOGO DUROU ${hours} HORA(S) E ${minutes} MINUTO(S)`);
}

