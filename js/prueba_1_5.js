// Escuchar el click en el botón
const boton = document.getElementById("boton")
boton.addEventListener("click", preguntarNombre)

//Guardar referencias a los heading
const h1 = document.getElementById("h1")
const h2 = document.getElementById("h2")
//Preguntar y guardar el nombre al usuario

function preguntarNombre() {
	const nombre =prompt("introduce tu nombre")
	mostrarNombre(nombre)
}

// Insertar el nombre donde ahora están los ...
function mostrarNombre(nombre) {
	h2.textContent = "hola👋"
	 h1.textContent = nombre
}
