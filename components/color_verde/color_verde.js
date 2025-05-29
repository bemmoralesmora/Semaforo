// color_verde.js
export function crearVerde() {
  const verde = document.createElement("div");
  verde.className = "verde oscuro";
  verde.id = "led-verde";
  return verde;
}

export async function obtenerEstadoVerde() {
  const url =
    "https://api.thingspeak.com/channels/2974131/fields/6.json?api_key=S7T0AJNHT2B3FK7J&results=1";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data?.feeds?.[0]?.field6 === "1" ? 1 : 0;
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
