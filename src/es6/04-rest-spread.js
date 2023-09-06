// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, fruits[1]);

//object destructuring

let user = {username: 'Oscar', age: 34};
let { username, age} = user;
console.log(username, user.age);
 
//spread operator

let person = {name : 'oscar', age:28};
let country = 'MX';

let data = {id: 1, ...person, country};
console.log(data);

//rest

function sum(num, ...values) {
  console.log(values); //en la funcion sum, values sera solo los tres  ultimos numeros 1, 2, 3 no tomara el primer 1 por que ese  sera  sum
  console.log(num + values[0]);
  return num + values [0];
}

sum(1, 1, 2, 3);