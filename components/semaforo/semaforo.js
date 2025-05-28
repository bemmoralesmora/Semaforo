import { rojo } from "../color_rojo/color_rojo.js";
import { amarillo } from "../color_amarillo/color_amarillo.js";
import { verde } from "../color_verde/color_verde.js";
function semaforo() {
  let semaforo = document.createElement("div");
  semaforo.className = "semaforo";

  semaforo.appendChild(rojo());
  semaforo.appendChild(amarillo());
  semaforo.appendChild(verde());

  return semaforo;
}

export { semaforo };
