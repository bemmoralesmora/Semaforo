import { temperatura } from "../temp_hum/temperatura.js";
import { humedad } from "../temp_hum/humedad.js";

function sensor() {
  let sensor = document.createElement("div");
  sensor.className = "sensor";

  sensor.appendChild(humedad());
  sensor.appendChild(temperatura());
  return sensor;
}

export { sensor };
