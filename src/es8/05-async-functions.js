const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(()=>resolve('AsynC!!'), 2000)
      : reject(new Error('Error'));
  })//la funcion de new promise se hizo con una condicional ternaria en vez de if
}

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('hello');
}

console.log('Before');
anotherFn();
console.log('After');
