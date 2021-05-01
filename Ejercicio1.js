// 1.	"Desarrolle un algoritmo que realice 
// la sumatoria de los números enteros comprendidos entre el 1 y el 1O, es decir, 1 + 2 + 3 + .... + 1O."

let SUM = 0;
let i;
let lista =[];

for (i=1; i<=10; i++){
    SUM += i;
    lista.push(i);
}
alert(`La suma de los numeros: ${lista} es ${SUM}`);
