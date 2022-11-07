/* Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario)
Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay */

const Length: number = Number(prompt("Ingrese la longitud del areglo"));
const ArrNums: number[] = new Array(Length);
//Defino la variable que almacenara los numeros positivos
let NumerosPositivos: number = 0;
let NumerosNegativos: number = 0;
let CantidadCeros: number = 0;

for (let i = 0; i < Length; i++) {
  ArrNums[i] = Number(
    prompt(
      `Ingrese el numero correspondiente a la posicion ${i + 1} de ${Length}`
    )
  );
  if (ArrNums[i] === 0) {
    CantidadCeros++;
  } else if (ArrNums[i] > 0) {
    NumerosPositivos++;
  } else {
    NumerosNegativos++;
  }
}
console.log(
  `Hay ${NumerosNegativos} numeros negativos,  ${CantidadCeros} ceros y ${NumerosPositivos} numeros positivos`
);
console.log("Los números ingresados son:", ArrNums);
