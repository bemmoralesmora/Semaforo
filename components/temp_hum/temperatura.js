// temperatura.js
import { db } from "../../services/config_firebase.js";
import {
  ref,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

function temperatura() {
  // Crear elementos del DOM
  let temperatura = document.createElement("div");
  temperatura.className = "temperatura";

  let logo_temp = document.createElement("div");
  logo_temp.className = "logo_temp";
  logo_temp.innerHTML = `<img src="../../assets/temp.png" alt="Temperatura">`;
  temperatura.appendChild(logo_temp);

  let dato_temp = document.createElement("h1");
  dato_temp.className = "dato_temp";
  dato_temp.textContent = "--";
  temperatura.appendChild(dato_temp);

  let simbolo_dato = document.createElement("h1");
  simbolo_dato.className = "simbolo_dato";
  simbolo_dato.textContent = "°C";
  temperatura.appendChild(simbolo_dato);

  // Conectar con Firebase
  const sensorRef = ref(db, "sensor");
  onValue(sensorRef, (snapshot) => {
    const data = snapshot.val();
    if (data && !isNaN(data.temp)) {
      dato_temp.textContent = data.temp.toFixed(2); // Mostrar con 2 decimales
    } else {
      dato_temp.textContent = "--"; // Mostrar si no hay datos
    }
  });

  return temperatura;
}

export { temperatura };
