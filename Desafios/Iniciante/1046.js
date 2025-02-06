let lines = `16 2`.split('\n');

let value = lines[0].split(" ").map(Number);

let starHour = value[0];
let endHour = value[1];
let day = 24;


if (starHour === endHour){
    let gametime = 24
    console.log(`O JOGO DUROU ${gametime} HORA(S)`)
}else if(starHour > endHour){
    let gameTime = (day - starHour) + endHour;
    console.log(`O JOGO DUROU ${gameTime} HORA(S)`)
}else if( endHour > starHour){
    let gameTime = endHour - starHour;
    console.log(`O JOGO DUROU ${gameTime} HORA(S)`)
}

