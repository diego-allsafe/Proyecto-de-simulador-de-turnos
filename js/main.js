function ingresoDatos(mensaje) {
  let dato = prompt(mensaje);
  console.log(dato);
  return dato;
}

let usuario = ingresoDatos("Ingrese su usuario");
let password = ingresoDatos("Ingrese su password");

function login(user, pass) {
  if (!user || !pass) {
    alert("Debes ingresar tu usuario y contraseña");
  } else {
    alert("Bienvenido " + user + "" + ": Elegi dia y horario a continuacion");
  }
}
login(usuario, password);

function turno(dia, hora) {
  this.dia = dia;
  this.hora = hora;

  this.hablar = () => {
    alert(
      "Tu turno queda asi: " +
        "" +
        this.dia +
        "" +
        ", a las " +
        "" +
        this.hora +
        "" +
        "hs."
    );
  };
}

const turno1 = new turno(
  prompt("Ingresa que dia queres atenderte:"),

  prompt("Ingresa a que hora podrias atenderte:")
);

turno1.hablar();
alert("Llama por telefono al 555-6666 para reconfirmar");
alert("Gracias!");

class ClientaTurnos {
  constructor(nombre, telefono, servicio) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.servicio = servicio;
  }
}
const clientas = [];
clientas.push(
  new ClientaTurnos(
    prompt("Ingresa nombre"),
    prompt("Ingresa telefono: "),
    "Depilacion"
  )
);
clientas.push(new ClientaTurnos("Maria", "4555 - 1855", "Belleza de pies"));
clientas.push(new ClientaTurnos("Carolina", "3412 - 4458", "Depilacion"));
clientas.push(new ClientaTurnos("Elena", "38546 - 1122", "Cosmetologia"));
clientas.push(new ClientaTurnos("Belen", "4784 - 4584", "Manos"));
console.log(clientas);
