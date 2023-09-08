async function* anotherGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('Hello');

//2 Example como podemos ver la siguiente funcion ejecuta primero el console log,  por que en la funcion le damos el valor  que espere(await)hasta que  se complete toda la funcion

async function arrayOfNames(array) {
  for await (let value of array) {
     console.log(value);
  }
}
 const names = arrayOfNames(['Oscar', 'David', 'Ana']);
 console.log('After');