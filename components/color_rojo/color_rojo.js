export function crearRojo() {
  const rojo = document.createElement("div");
  rojo.className = "rojo oscuro";
  rojo.id = "led-rojo";
  return rojo;
}

export async function obtenerEstadoRojo() {
  const url =
    "https://semafororockemma-default-rtdb.firebaseio.com/semaforo/rojo.json";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data === 1 ? 1 : 0;
  } catch (error) {
    console.error("Error obteniendo estado rojo:", error);
    return 0;
  }
}

export function actualizarEstadoRojo(valor) {
  const rojo = document.getElementById("led-rojo");
  if (rojo) {
    rojo.classList.toggle("claro", valor === 1);
    rojo.classList.toggle("oscuro", valor === 0);
  }
}

export function iniciarMonitoreoRojo() {
  obtenerEstadoRojo().then(actualizarEstadoRojo);
  setInterval(async () => {
    actualizarEstadoRojo(await obtenerEstadoRojo());
  }, 2000);
}
