const anotherFunction = () => {
  return new Promise((resolve, reject) => {
    if(false){
      resolve('Hey!!');
    } else {
      reject('Whoooooops!');
    }
  })
}

anotherFunction()
  .then(response => console.log(response))//como se agrega el catch en este caso no agregamos el ; si no hasta el catch que es la ultima parte.
  .catch(err => console.log(err));

  function function1(){
    setTimeout(function(){
      console.log("mensaje 1");
    }, 1000);
  }
  
  function mensaje(fn){
    fn();
  }
