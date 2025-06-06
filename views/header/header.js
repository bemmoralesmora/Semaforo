function header() {
  let header = document.createElement("div");
  header.className = "header";

  let title = document.createElement("div");
  title.textContent = "Raspberry Pi Pico W";
  title.className = "title-h";

  let img_rasbery = document.createElement("div");
  img_rasbery.className = "rasberyPico";

  let raspberry_img = document.createElement("img");
  raspberry_img.src = "../../assets/raspberry-pi.svg";
  img_rasbery.appendChild(raspberry_img);

  header.appendChild(img_rasbery);
  header.appendChild(title);
  return header;
}

export { header };
