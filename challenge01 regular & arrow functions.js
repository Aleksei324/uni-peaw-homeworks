/*
Las diferencias entre las funciones regulares y de flecha son:

- En las funciones flecha las llaves no son necesarias si sólo hay
una expresión. Si sólo hay un argumento, los paréntesis tampoco
son necesarios.

- Las funciones de flecha no tienen 'arguments binding' ni su
propia keyword 'this'.

- Las funciones regulares son invocables y construibles; las
funciones flecha solo son invocables pero no construibles
(new keyword).

- Podemos utilizar parámetros con nombres duplicados en funciones
regulares; eso no es posible en funciones flecha.

(Kapoor V, 2020)
from
https://dev.to/vandnakapoor19/the-difference-between-regular-functions-and-arrow-functions-j7d/
*/

const regular = function isEven(n) {
  /*
    receive a number;
    will print in console if it's odd or even
    */
  let x;
  n % 2 === 0 ? (x = "even") : (x = "odd");
  console.log(x);
};

const arrow = (n) => console.log(n % 2 === 0 ? "even" : "odd");

regular(1);
regular(2);
arrow(3);
arrow(4);
