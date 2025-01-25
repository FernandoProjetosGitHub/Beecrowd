let lines = `800`.split('\n');

let age = Number(lines[0]);

let ageYear = Math.floor(age / 365);
age %= 365;
let ageMonth = Math.floor(age / 30);
let ageDays = age % 30;





console.log(`${ageYear} ano(s)\n${ageMonth} mes(es)\n${ageDays} dia(s)`)