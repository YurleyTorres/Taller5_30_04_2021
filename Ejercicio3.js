// 3.	Desarrolle un algoritmo que permita determinar el área y volumen de un cilindro dado su radio {R) 
//     y altura (H). Formula: (VOL = π * R^2 + H), (AREA = 2 * π + R + H)


let R;
let H;
let VOL, AREA;
alert("Vamos a calcular el área y volumen de un cilindro \nFormula: (VOL = π * R^2 + H)\n (AREA = 2 * π + R + H)");
R = parseInt(prompt("Ingrese el radio"));
H = parseInt(prompt("Ingrese la altura"));
VOL = (Math.PI * (Math.pow(R,2)) + H);
AREA = (2 * Math.PI  + R + H);
alert(`El área es ${Number(AREA.toFixed(2))}`);
alert(`El volumen es ${Number(VOL.toFixed(2))}`);
console.log(`El área es ${Number(AREA.toFixed(2))}`);
console.log(`El volumen es ${Number(VOL.toFixed(2))}`);
console.log(`El área es ${(AREA)}`);
console.log(`El volumen es ${(VOL)}`);
