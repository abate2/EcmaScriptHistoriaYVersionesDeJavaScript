const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve ("resolve"));
const promise3 = new Promise ((resolve, reject) => resolve('Resolve 2')); //en estas promesas  aprovechamos  la caracteristica de las funciones flecha en donde  tien el return implicito.

Promise.allSettled([promise1, promise2, promise3])
  .then(response => console.log(response));

