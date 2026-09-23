let usuarios = [];

const lista = document.getElementById("lista");
const buscador = document.getElementById("buscador");
const boton = document.getElementById("btnCargar");

// muestra los usuarios en pantalla
function mostrarUsuarios(datos) {
  lista.innerHTML = "";

  for (let i = 0; i < datos.length; i++) {
    const div = document.createElement("div");
    div.className = "tarjeta";
    div.innerHTML = "<h3>" + datos[i].name + "</h3>" +
      "<p>Correo: " + datos[i].email + "</p>" +
      "<p>Ciudad: " + datos[i].address.city + "</p>";
    lista.appendChild(div);
  }
}

// trae los datos de la api
function cargarUsuarios() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      usuarios = datos;
      mostrarUsuarios(usuarios);
    })
    .catch(function (error) {
      console.log("Error:", error);
      lista.innerHTML = "<p>No se pudieron cargar los datos</p>";
    });
}

// filtra mientras se escribe
function buscarUsuario() {
  const texto = buscador.value.toLowerCase();
  const filtrados = usuarios.filter(function (u) {
    return u.name.toLowerCase().includes(texto);
  });
  mostrarUsuarios(filtrados);
}

boton.addEventListener("click", cargarUsuarios);
buscador.addEventListener("input", buscarUsuario);