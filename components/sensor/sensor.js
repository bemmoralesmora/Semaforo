import { temperatura } from "../temp_hum/temperatura.js";
import { humedad } from "../temp_hum/humedad.js";

function sensor() {
  let sensor = document.createElement("div");
  sensor.className = "sensor";

  let titulo = document.createElement("h1");
  titulo.className = "titulo_dht11";
  titulo.textContent = "DHT11";
  sensor.appendChild(titulo);

  sensor.appendChild(humedad());
  const tempComponent = temperatura();
  sensor.appendChild(tempComponent);

  let ventilador = document.createElement("div");
  ventilador.className = "ventilador";
  sensor.appendChild(ventilador);

  let img_estatica = document.createElement("img");
  img_estatica.src =
    "https://static.vecteezy.com/system/resources/previews/015/657/807/non_2x/ventilator-electric-fan-cartoon-icon-household-devices-for-air-cooling-and-conditioning-climate-control-png.png";
  img_estatica.className = "img_ventilador img_statica";
  ventilador.appendChild(img_estatica);

  let img_movimiento = document.createElement("img");
  img_movimiento.className = "img_ventilador img_movimiento";
  img_movimiento.src =
    "https://media.baamboozle.com/uploads/images/71279/1604362986_531421";
  ventilador.appendChild(img_movimiento);

  // Ocultar gif inicialmente
  img_movimiento.style.display = "none";

  return sensor;
}

export { sensor };
