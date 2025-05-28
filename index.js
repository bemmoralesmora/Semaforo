import { semaforo } from "./components/semaforo/semaforo.js";
function carga_dom() {
  let dom = document.querySelector("#root");
  dom.className = "dom";
  dom.appendChild(semaforo());
  return dom;
}

carga_dom();
