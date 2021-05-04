// 5.	Desarrolle un algoritmo para la empresa Constructora Tecnovivir Casas C.A., que le permita calcular e 
// imprimir la nómina para su cancelación a un total de 50 obreros calificados a quienes debe cancelar por horas 
// trabajadas. La hora trabajada se pautó en 30.000 Bolívares.

alert(`Constructora Tecnovivir Casas C.A.`);

let nomina = [];
let ValHora = 30000;
let TotalNom = 0;
decimal = new Intl.NumberFormat("de-DE",{style: "currency", currency: "COP"});
do{
    let sal = 0;
    let nombre = prompt("Ingrese el nombre del empleado");
    let CantHorasT = parseInt(prompt("Ingrese la cantidad de horas trabajadas"));
    sal =  ValHora * CantHorasT;
    TotalNom += sal;
    nomina.push({Nombre : nombre, Horas : CantHorasT, cancelar :  decimal.format(sal)});
}while( parseInt(prompt("Desea ingresar otro empleado?\n0. No\n1. Si")));
let cadena = "";
let convertir = ({...objects}) => {
    cadena += objects.Nombre+"                        "+ objects.Horas+"                      "+objects.cancelar+"\n\n";
}
for (let i = 0; i < nomina.length; i++) {
    convertir(nomina[i]);
}
alert(`.........Nomina de Abril.........\n   Nombre:               Cantidad de horas:        Total del mes: \n${cadena} \nTotal de nomina.......................${TotalNom}`);
console.log("La nomina es",nomina,"\nTotal de nomina",TotalNom);
