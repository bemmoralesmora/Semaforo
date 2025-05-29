// color_rojo.js
export function crearRojo() {
  const rojo = document.createElement("div");
  rojo.className = "rojo oscuro";
  rojo.id = "led-rojo";
  return rojo;
}

export async function obtenerEstadoRojo() {
  const url =
    "https://api.thingspeak.com/channels/2974131/fields/4.json?api_key=S7T0AJNHT2B3FK7J&results=1";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data?.feeds?.[0]?.field4 === "1" ? 1 : 0;
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
