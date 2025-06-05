import { crearSemaforo } from "./components/semaforo/semaforo.js";
import { header } from "./views/header/header.js";
import { sensor } from "./components/sensor/sensor.js";

function carga_dom() {
  let dom = document.querySelector("#root");
  dom.className = "dom";
  dom.appendChild(header());
  dom.appendChild(crearSemaforo());
  dom.appendChild(sensor());

  return dom;
}

carga_dom();
