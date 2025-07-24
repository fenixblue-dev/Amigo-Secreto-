// Lista donde se guardarán los nombres
const nombres = [];

// Función para adicionar un nombre a la lista
function adicionarNombre() {
  const input = document.getElementById("nombreInput");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  nombres.push(nombre);
  mostrarLista();
  input.value = "";
}

// Función para mostrar la lista actualizada en pantalla
function mostrarLista() {
  const lista = document.getElementById("listaNombres");
  lista.innerHTML = "";

  nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

// Función para sortear un nombre al azar
function sortearAmigo() {
  if (nombres.length === 0) {
    alert("No hay nombres para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * nombres.length);
  const seleccionado = nombres[indice];

  const resultado = document.getElementById("resultado");
  resultado.textContent = `🎉 El amigo secreto es: ${seleccionado}`;
    }
