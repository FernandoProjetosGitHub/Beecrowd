let lines = `2 2
3 -2
-8 -1
-7 1
0 2`.split('\n');

for(let splitter = 0; splitter < lines.length; splitter ++){

    let linesSplitted = lines[splitter].split(" ");

    let lines0 = parseInt(linesSplitted[0]);
    let lines1 = parseInt(linesSplitted[1]);

    if(lines0 === 0 || lines1 === 0){
        break;
    } 
    if(lines0 > 0 && lines1 > 0){
        console.log("primeiro");
        
    }else if(lines0 < 0 && lines1 > 0){
        console.log("segundo");
        
    }else if(lines0 < 0 && lines1 < 0) {
        console.log("terceiro");
        
    }else if(lines0 > 0 && lines1 < 0){
        console.log("quarto");
    }
}