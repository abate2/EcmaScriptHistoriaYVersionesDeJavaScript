const regex = /\b(Apple)+\b/g;

const fruit = 'Apple, Banana Kiwi, Apple, orange, etc. etc. etc.';

for (const match of fruit.matchAll(regex)) {
  console.log(match);
}// este metodo funciona en cadenas de directamente  es con cadeas  de  texto como en el siguiente ejemplo:

const fruit2 = 'Apple, Banana Kiwi, Apple, orange, etc. etc. etc.';

for (const match of fruit2.matchAll("etc")) {
  console.log(match);
}