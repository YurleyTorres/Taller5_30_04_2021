// 4.	"Desarrolle un algoritmo que permita leer dos números y ordenarlos de menor a mayor,si es el caso."
let lista= [];
let i, num;

for( i=1; i<=2;i++){
    num =  parseInt(prompt("Ingrese un numero"));
    lista.push(num);
}
function comparar(a, b) {
    return a - b;
  }
  lista = lista.sort(comparar);
  alert(`ordenado de menor a mayor: ${lista}`);
  
  console.log('ordenado de menor a mayor:', lista);