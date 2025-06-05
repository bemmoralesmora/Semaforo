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
  logo_hum.innerHTML = `<img src="../../assets/humedad.png" alt="">`;
  humedad.appendChild(logo_hum);

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
    if (data && !isNaN(data.hum)) {
      dato_hum.textContent = data.hum.toFixed(2); // Mostrar con 2 decimales
    } else {
      dato_hum.textContent = "--"; // Mostrar si no hay datos
    }
  });

  return humedad;
}

export { humedad };
