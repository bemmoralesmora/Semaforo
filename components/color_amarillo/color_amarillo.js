// amarillo.js
export function crearAmarillo() {
  const amarillo = document.createElement("div");
  amarillo.className = "amarillo oscuro";
  amarillo.id = "led-amarillo";
  return amarillo;
}

export async function obtenerEstadoAmarillo() {
  const url =
    "https://api.thingspeak.com/channels/2974131/fields/5.json?api_key=S7T0AJNHT2B3FK7J&results=1";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.feeds && data.feeds.length > 0) {
      const valor = parseInt(data.feeds[0].field5);
      return isNaN(valor) ? 0 : valor;
    }
    return 0;
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
  // Consulta inmediata
  obtenerEstadoAmarillo().then(actualizarEstadoAmarillo);

  // Consulta periódica cada 2 segundos
  setInterval(async () => {
    const estado = await obtenerEstadoAmarillo();
    actualizarEstadoAmarillo(estado);
  }, 2000);
}
