try {
  hello();
} catch (error) {
  console.log(error);
}

//Con las  nuevas  funciones de es10 podemos personalizar el error no solo  atraparlo con catch no es tan recomendado pues  el sistema te da mas informacion

try {
  anotherFn();
} catch {
  console.log ('Esto es un error');
}