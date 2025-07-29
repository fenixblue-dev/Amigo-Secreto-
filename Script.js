let nombres = [];

function adicionarNombre() {
  const input = document.getElementById("nombreInput");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor ingresá un nombre válido.");
    return;
  }

  if (nombres.includes(nombre)) {
    alert("Ese nombre ya fue agregado.");
    input.value = "";
    return;
  }

  nombres.push(nombre);
  actualizarLista();
  input.value = "";
}

function actualizarLista() {
  const lista = document.getElementById("listaNombres");
  lista.innerHTML = "";

  nombres.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (nombres.length < 2) {
    alert("Agregá al menos dos nombres para hacer el sorteo.");
    return;
  }

  

