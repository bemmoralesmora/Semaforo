function controlador() {
  let controlador = document.createElement("section");
  controlador.className = "controlador";

  let btn_apagar = document.createElement("section");
  btn_apagar.className = "btns";
  controlador.appendChild(btn_apagar);

  let btn_off = document.createElement("button");
  btn_off.className = "btn_off";
  btn_apagar.appendChild(btn_off);

  let text_btn_off = document.createElement("h1");
  text_btn_off.textContent = "off";
  btn_apagar.appendChild(text_btn_off);

  let btn_encender = document.createElement("section");
  btn_encender.className = "btns";
  controlador.appendChild(btn_encender);

  let btn_on = document.createElement("button");
  btn_on.className = "btn_on";
  btn_encender.appendChild(btn_on);

  let text_btn_on = document.createElement("h1");
  text_btn_on.textContent = "on";
  btn_encender.appendChild(text_btn_on);

  let btn_parpadear = document.createElement("section");
  btn_parpadear.className = "btns";
  controlador.appendChild(btn_parpadear);

  let btn_parpe = document.createElement("button");
  btn_parpe.className = "btn_parpe";
  btn_parpadear.appendChild(btn_parpe);

  let text_btn_parpe = document.createElement("h1");
  text_btn_parpe.textContent = "Parpadear";
  btn_parpadear.appendChild(text_btn_parpe);

  let btn_reiniciar = document.createElement("section");
  btn_reiniciar.className = "btns";
  controlador.appendChild(btn_reiniciar);

  let btn_restart = document.createElement("button");
  btn_restart.className = "btn_restart";
  btn_reiniciar.appendChild(btn_restart);

  let text_btn_restart = document.createElement("h1");
  text_btn_restart.textContent = "Reiniciar";
  btn_reiniciar.appendChild(text_btn_restart);

  return controlador;
}

export { controlador };
