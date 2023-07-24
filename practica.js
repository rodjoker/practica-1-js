// 1 declaro la variable miRefran
   let miRefran;
// 2 asigno un refran a la variable
      miRefran = "no hay mal que por bien no venga";

/* declaro una variable longitudRefran y 
asigno el numero de letras de mi refran a esa variable*/

console. log (miRefran.length);

let longitudRefran;

longitudRefran = miRefran.length;

longitudRefran= 32;

/* 3 declaro variable novenaLetra y le 
asigno el valor de la novena letra de mi refran*/

let novenaLetra;

console.log(miRefran [9]);

novenaLetra = "l"; 

/* 4 En otra línea asigna a la variable 
ultimaLetra el valor de la última letra del refrán*/

let ultimaLetra = miRefran.lastIndexOf("a");

/* 5 utilizo lastIndexOf para que me busque el valor de la ultima "a" si 
solo uso indexOf me devuelve el valor de la primera "a" */

console.log (ultimaLetra);

ultimaLetra = 31;

/* 6 Busca el índice de la cadena “que” en tu refrán y asignalo a la
variable índicePalabra. Si el índice es menor que cero busca 
cualquier otra preposición hasta que sea mayor a 0 */


// 7 Reemplaza la preposición encontrada por la cadena “xxx”


// 8 Convierte a mayúsculas todos los caracteres de tu refrán
console.log (miRefran.toUpperCase() );


