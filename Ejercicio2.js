// 2.	Determinar la hipotenusa de un triángulo rectángulo conocidas las longitudes 
// de sus dos catetos. Desarrolle el algoritmo correspondiente. Formula: (HIP = √CATa + CATb)

let A;
let B;
let H;

alert("Vamos a calcular la hipotenusa de un triángulo rectángulo\nFormula: (HIP = √CATa + CATb)");
A = parseInt(prompt("Ingrese la medida del primer cateto"));
B = parseInt(prompt("Ingrese la medida del segundo cateto"));
H = (Math.sqrt(A)+ Math.sqrt(B));
alert(`La hipotenusa es ${H}`);
console.log("La hipotenusa es " + H);
