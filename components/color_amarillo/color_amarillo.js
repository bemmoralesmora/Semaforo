export function crearAmarillo() {
  const amarillo = document.createElement("div");
  amarillo.className = "amarillo oscuro";
  amarillo.id = "led-amarillo";
  return amarillo;
}

export async function obtenerEstadoAmarillo() {
  const url =
    "https://semafororockemma-default-rtdb.firebaseio.com/semaforo/led2.json";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data === 1 ? 1 : 0;
  } catch (error) {
    console.error("Error obteniendo datos del LED amarillo:", error);
    return 0;
  }
}

export function actualizarEstadoAmarillo(valor) {
  const amarilloElemento = document.getElementById("led-amarillo");
  if (!amarilloElemento) return;

  if (valor === 1) {
    amarilloElemento.classList.remove("oscuro");
    amarilloElemento.classList.add("claro");
  } else {
    amarilloElemento.classList.remove("claro");
    amarilloElemento.classList.add("oscuro");
  }
}

export function iniciarMonitoreoAmarillo() {
  obtenerEstadoAmarillo().then(actualizarEstadoAmarillo);

  setInterval(async () => {
    const estado = await obtenerEstadoAmarillo();
    actualizarEstadoAmarillo(estado);
  }, 2000);
}
