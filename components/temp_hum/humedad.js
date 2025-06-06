// humedad.js
import { db } from "../../services/config_firebase.js";
import {
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

function humedad() {
  // Crear elementos del DOM
  let humedad = document.createElement("div");
  humedad.className = "humedad";

  let logo_hum = document.createElement("div");
  logo_hum.className = "logo_hum";
  humedad.appendChild(logo_hum);

  let img_hum = document.createElement("img");
  img_hum.src = "../../assets/humedad.png";
  logo_hum.appendChild(img_hum);

  let dato_hum = document.createElement("h1");
  dato_hum.className = "dato_hum";
  dato_hum.textContent = "--";
  humedad.appendChild(dato_hum);

  let simbolo_dato = document.createElement("h1");
  simbolo_dato.className = "simbolo_dato";
  simbolo_dato.textContent = "%";
  humedad.appendChild(simbolo_dato);

  // Conectar con Firebase
  const sensorRef = ref(db, "sensor");
  onValue(sensorRef, (snapshot) => {
    const data = snapshot.val();
    if (data && typeof data.humedad === "number") {
      dato_hum.textContent = data.humedad.toFixed(1); // Mostrar con 1 decimal
    } else {
      dato_hum.textContent = "--";
    }
  });

  return humedad;
}

export { humedad };
