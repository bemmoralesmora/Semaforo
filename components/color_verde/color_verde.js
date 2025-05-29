export function crearVerde() {
  const verde = document.createElement("div");
  verde.className = "verde oscuro";
  verde.id = "led-verde";
  return verde;
}

export async function obtenerEstadoVerde() {
  const url =
    "https://semafororockemma-default-rtdb.firebaseio.com/semaforo/led3.json";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data === 1 ? 1 : 0;
  } catch (error) {
    console.error("Error obteniendo estado verde:", error);
    return 0;
  }
}

export function actualizarEstadoVerde(valor) {
  const verde = document.getElementById("led-verde");
  if (verde) {
    verde.classList.toggle("claro", valor === 1);
    verde.classList.toggle("oscuro", valor === 0);
  }
}

export function iniciarMonitoreoVerde() {
  obtenerEstadoVerde().then(actualizarEstadoVerde);
  setInterval(async () => {
    actualizarEstadoVerde(await obtenerEstadoVerde());
  }, 2000);
}
