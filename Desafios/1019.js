let lines = `1`.split('\n');

let value = Number(lines[0]);

let valueHours = Math.floor(value / 3600); // Calcula o total de horas.

value %= 3600; // Atualiza o valor para os segundos restantes após calcular as horas.

let valueMinutes = Math.floor(value / 60); // Calcula o total de minutos dos segundos restantes.

let valueSec = value % 60; // Calcula o total de segundos dos minutos restantes.

console.log(`${valueHours}:${valueMinutes}:${valueSec}`)








    
    



