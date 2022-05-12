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
