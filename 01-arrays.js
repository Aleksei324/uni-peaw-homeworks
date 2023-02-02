/*
https://www.w3schools.com/jsref/jsref_obj_array.asp
*/

const array1 = ['Alan', 'Bryan', 'Carl'];
const array2 = ['Orion', 'Kyle', 'Rey'];

// I will be printing a lot so this is easier
const p = (x) => console.log(x);


p(`Array 1: ${array1}
Array 2: ${array2}
----- < 1 - 5 > -----`);


// 1
const array3 = [...array1.concat(array2)];
p(array3);

// 2
// Paste starting in the index 3, copy from index 0 until index 2 (exclusive)
// starting array = ['Alan', 'Bryan', 'Carl', 'Orion', 'Kyle', 'Rey']
array3.copyWithin(3, 0, 2);
p(array3); // mutado

// 3
// entries() regresa un iterable con llaves y valores
for (const [key, value] of array1.entries()) {
	p(`llave: ${key}; valor: ${value}`);
}

// 4
// revisa si el array pasa un test
p(array1.every(x => x !== 'Juan'));

// 5
// llena el array con el valor
array1.fill('Hall', 0, 2);
p(array1); // mutado


p('----- < 6 - 10 > -----');


// 6
// crea un nuevo array con los valores que cumplan el test
p(array1.filter(x => x === 'Hall'));

// 7
// regresa el valor de quien cumpla el test
p(array2.find(x => x.charAt(0) === 'K'));

// 8
// regresa el index de quien cumpla el test
p(array3.findIndex(x => x.charAt(2) === 'y'));

// 9
// runs a function for each element
array2.forEach(p);

// 10
// creates an array from something
p(Array.from('ABCDE'));


p('----- < 11 - 15 > -----');


// 11
// check if there is that element
p(array1.includes('Hall'));

// 12
// return the index of the element
p(array2.indexOf('Orion'));

// 13
p(Array.isArray(array1));

// 14
// creates a string with all elements and a separator
p(array3.join('-'));

// 15
// crea un iterable con las llaves
for (const key of array2.keys()) {
	p(`llave: ${key}`);
}


p('----- < 16 - 20 > -----');


// 16
p(array2.lastIndexOf('Orion'));

// 17
// crea un nuevo array donde cada elemento del anterior array es modificado por la función y retornado
p(array2.map(x => x + ' del Rosario'));

// 18
p(array3.pop());
p(array3); // mutado

// 19
p(array1.push('Orion'));
p(array1); // mutado

// 20
// Reduce the values of an array to a single value
// example: getting the total
let n = [1, 4, 10, 22, 46];
p(n.reduce((prev, current) => prev + current));


p('----- < 21 - 25 > -----');


// 21
p(n.reduceRight((prev, current) => prev - current));

// 22
array1.reverse();
p(array1); // mutado

// 23
// remove the first element
array3.shift();
p(array3); // mutado

// 24
// regresa un array desde el indice 1 hasta el indice 3 (exclusivo)
p(array3.slice(1, 3));

// 25
// check if any element apply
p(array1.some((x) => x === 'Orion'));


p('----- < 26 - 30 > -----');


// 26
array1.sort();
p(array1); // mutado

// 27
//empieza a remover desde el indice 1, remueve dos elementos
array3.splice(1, 2);
p(array3); //mutado

// 28
p(array1.toString());

// 29
// inserta elemento al inicio
array3.unshift('Bob');
p(array3); // mutado

// 30
// return itself
p(array1.valueOf());


p(`----- -----
Array 1: ${array1}
Array 2: ${array2}
Array 3: ${array3}`);
