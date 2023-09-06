var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat';
console.log(animal);

const fruits = () => {
  if(true) {
    var fruit1 = 'Apple';//var es function scope es decir se pueden acceder en la funcion.
    let fruit2 = 'Kiwi'; // let es block scope solo puede ser accesado en el boque en donde se declara en este caso el if.
    const fruit3 = 'Banana';//const es block scope solo puede ser accesado en el boque en donde se declara en este caso el if.
  }
  console.log(fruit1);
  console.log(fruit2);
  console.log(fruit3);
}

fruits();