function header() {
  let header = document.createElement("div");
  header.className = "header";

  let title = document.createElement("div");
  title.textContent = "Raspberry Pi Pico W";
  title.className = "title-h";

  let img_rasbery = document.createElement("div");
  img_rasbery.className = "rasberyPico";
  img_rasbery.innerHTML = `
  <img src="../../assets/raspberry-pi.svg" alt="">
  `;

  header.appendChild(img_rasbery);
  header.appendChild(title);
  return header;
}

export { header };
