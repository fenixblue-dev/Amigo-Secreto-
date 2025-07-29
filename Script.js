
  // Suponiendo que tienes un arreglo con los nombres de los participantes
const participantes = ["Ana", "Bruno", "Carla", "Diego", "Elena"];

function mezclar(array) {
  // Algoritmo de Fisher-Yates para mezclar aleatoriamente
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function asignarAmigosSecretos(participantes) {
  let asignados;
  let valido = false;

  while (!valido) {
    asignados = [...participantes];
    mezclar(asignados);
    valido = participantes.every((persona, i) => persona !== asignados[i]);
  }

  const resultado = {};
  participantes.forEach((persona, i) => {
    resultado[persona] = asignados[i];
  });

  return resultado;
}

// Para mostrar el resultado
const resultado = asignarAmigosSecretos(participantes);
console.log("🎁 Resultado del Amigo Secreto:");
for (const persona in resultado) {
  console.log(`${persona} → ${resultado[persona]}`);
}

