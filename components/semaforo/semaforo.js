// semaforo.js
import { crearRojo, iniciarMonitoreoRojo } from "../color_rojo/color_rojo.js";
import {
  crearAmarillo,
  iniciarMonitoreoAmarillo,
} from "../color_amarillo/color_amarillo.js";
import {
  crearVerde,
  iniciarMonitoreoVerde,
} from "../color_verde/color_verde.js";
import { controlador } from "../../controllers/controlador.js";

export function crearSemaforo() {
  const semaforo = document.createElement("div");
  semaforo.className = "semaforo";

  semaforo.appendChild(controlador());
  semaforo.appendChild(crearRojo());
  semaforo.appendChild(crearAmarillo());
  semaforo.appendChild(crearVerde());

  iniciarMonitoreoRojo();
  iniciarMonitoreoAmarillo();
  iniciarMonitoreoVerde();

  return semaforo;
}
