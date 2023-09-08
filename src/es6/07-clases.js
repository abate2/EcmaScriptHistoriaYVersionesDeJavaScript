// dECLARANDO CLASE
class User {};
// INSTANCIA DE UNA CLASE
//const newUser = new User();

class user {
  //METODOS
  greeting() {
    return 'Hello';
  }
};

const gndx = new user();//Aqui estamos generando la instancia de la clase user que creamos
console.log(gndx.greeting());//Como podemos ver aqui mandamos imprimir el metodo greetings que creamos en la clase user.Toca llamarlo usando la instancia gndx(constante gndx)
const bebeloper = new user();
console.log(bebeloper.greeting());

//CONSTRUCTOR

class user {
  //constructor
  constructor() {
    console.log('Nuevo Usuario');
  }
  greeting() {
    return 'Hello';
  }
}

const david = new user(); //Aqui se esta llamando al constructor que inicializa los elementos cuando  son asignados con esta palabra  'NEW' antes de user  que seria el nombre de la clase,cuando hacemos la instancia(const david = new user())

//THIS

class user {
  constructor(name) {
    this.name = name
  }
  //metodos
  speak() {
    return 'Hello'
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user('Ana');
console.log(ana.greeting());//aqui llamamos el metodo que creamos para la clase user(class user), solo podemos llamar un metodo despues de hacer la instancia.

//SETTERS GETTERS

class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //metodos
    speak() {
      return 'Hello';
    }
    greeting(){
      return `${this.speak()} ${this.name}}`;
    }
    //Get Aqui quiero obtener un valor dentro de  esta clase en esta caso el valor age.
    get uAge(){
      return this.age;
    }
    //Set aqui voy a pasar el valor que quiero cambiar, en este caso el valor n,  el cual lo estamos  asignando a age, aqui todavia estamos haciendo metodos
    set uAge(n) {
      this.age = n;
    }
  }

  const bebeloper1 = new user('David', 15);
  console.log(bebeloper1.uAge);
  console.log(bebeloper1.uAge = 20);
