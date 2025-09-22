// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear un array para almacenar los nombres
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validar: solo letras y espacios
  let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  if (nombre === "") {
    alert("Por favor ingresa un nombre.");
  } else if (!regex.test(nombre)) {
    alert("Solo se permiten letras y espacios.");
  } else if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue ingresado.");
  } else {
    amigos.push(nombre);
    mostrarLista();
  }

  input.value = "";
}

// Función para mostrar los amigos en la lista
function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((amigo, index) => {
    let li = document.createElement("li");

    // Nombre del amigo
    let span = document.createElement("span");
    span.textContent = amigo;

    // Botón eliminar minimalista
    let btnEliminar = document.createElement("button");
    btnEliminar.innerHTML = "&times;"; 
    btnEliminar.classList.add("btn-eliminar");
    btnEliminar.onclick = () => confirmarEliminacion(amigo, index);

    li.appendChild(span);
    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}

// Función para confirmar y eliminar un amigo
function confirmarEliminacion(nombre, indice) {
  let confirmar = confirm(`¿Seguro que deseas eliminar a ${nombre}?`);
  if (confirmar) {
    eliminarAmigo(indice);
  }
}

// Función para eliminar un amigo
function eliminarAmigo(indice) {
  amigos.splice(indice, 1);
  mostrarLista();
}

// Función para sortear un amigo secreto
function sortearAmigo() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    alert("Agrega al menos un amigo antes de sortear.");
    return;
  }

  let indice = Math.floor(Math.random() * amigos.length);
  let li = document.createElement("li");
  li.textContent = `🎉 Tu amigo secreto es: ${amigos[indice]} 🎉`;
  resultado.appendChild(li);
}

