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
  temperatura.appendChild(logo_temp);

  let temp_img = document.createElement("img");
  temp_img.src = "https://cdn-icons-png.flaticon.com/512/6239/6239785.png";
  logo_temp.appendChild(temp_img);

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
    if (data && typeof data.temperatura === "number") {
      const tempValue = data.temperatura;
      dato_temp.textContent = tempValue.toFixed(1);

      // Controlar el ventilador
      const ventiladorStatic = document.querySelector(".img_statica");
      const ventiladorGif = document.querySelector(".img_movimiento");

      if (tempValue >= 30) {
        // Mostrar gif y ocultar imagen estática
        if (ventiladorStatic) ventiladorStatic.style.display = "none";
        if (ventiladorGif) ventiladorGif.style.display = "block";

        temperatura.classList.add("alerta-alta");
      } else {
        // Mostrar imagen estática y ocultar gif
        if (ventiladorStatic) ventiladorStatic.style.display = "block";
        if (ventiladorGif) ventiladorGif.style.display = "none";

        temperatura.classList.remove("alerta-alta");
      }
    } else {
      dato_temp.textContent = "--";
      temperatura.classList.remove("alerta-alta", "alerta-baja");
    }
  });

  return temperatura;
}

export { temperatura };
