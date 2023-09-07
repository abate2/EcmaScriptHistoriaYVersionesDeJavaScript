function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Oscar','David','Ana','Ulises','Jenifer']);
 console.log(it.next().value);
 console.log(it.next().value);
 console.log(it.next().value);
 console.log(it.next().value);
 console.log(it.next().value);
 console.log(it.next().value);
 console.log(it.next().value);


 //exercise class 16
function* getId() {
  let idsGenerados = 1;
  while (true) {
    yield idsGenerados++;
  }
}
const gatosId = getId();
console.log(gatosId.next().value);
console.log(gatosId.next().value);
