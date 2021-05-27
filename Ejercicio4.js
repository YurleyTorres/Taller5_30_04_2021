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
  let mayor = parseInt(lista.length-1);
  let menor = parseInt(lista.length+1);
  alert(`El menor es  ${lista[mayor]}` );
  alert(`El menor es  ${lista[menor]}`);
  console.log('ordenado de menor a mayor:', lista);
  console.log(`El menor es  ${lista[mayor]}`);
  console.log(`El menor es  ${lista[menor]}`);