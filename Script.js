const participantes = [];

document.addEventListener("DOMContentLoaded", () => {
  const btnAdicionar = document.getElementById("btnAdicionar");
  const btnSortear = document.getElementById("btnSortear");

  btnAdicionar.addEventListener("click", adicionarParticipante);
  btnSortear.addEventListener("click", sortearAmigoSecreto);
});

function adicionarParticipante() {
  const input = document.getElementById("nombreInput");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Escribí un nombre.");
    return;
  }

  if (participantes.includes(nombre)) {
    alert("Ese nombre ya fue agregado.");
    return;
  }

  participantes.push(nombre);

  const li = document.createElement("li");
  li.textContent = nombre;
  document.getElementById("listaParticipantes").appendChild(li);

  input.value = "";
  input.focus();
}

function mezclar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function sortearAmigoSecreto() {
  if (participantes.length < 2) {
    alert("Agregá al menos 2 participantes.");
    return;
  }

  let asignados = [...participantes];
  let valido = false;

  while (!valido) {
    mezclar(asignados);
    valido = participantes.every((p, i) => p !== asignados[i]);
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  participantes.forEach((persona, i) => {
    const li = document.createElement("li");
    li.textContent = `${persona} → ${asignados[i]}`;
    resultado.appendChild(li);
  });
}

