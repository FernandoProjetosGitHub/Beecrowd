let lines = `5 4
7 2
3 8
2 2`.split('\n');

for(let splitter = 0; splitter < lines.length; splitter ++){

    let linesSplitted = lines[splitter].split(" ");

    let lines0 = parseInt(linesSplitted[0]);
    let lines1 = parseInt(linesSplitted[1]);

    if(lines0 === lines1){

        break;

    }
    if(lines0 > lines1){

        console.log(`Decrescente`);
        
    }else{

        console.log(`Crescente`);
        
    }
    
}