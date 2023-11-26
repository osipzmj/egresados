let fontSize = 16; // Tamaño de fuente base en px
const increment = 2; // Incremento/decremento en px
const minFontSize = 12; // Tamaño de fuente mínimo permitido
let modalShown = false;

function zoomIn() {
  fontSize += increment;
  document.body.style.fontSize = fontSize + "px";
  modalShown = false; // Restablecer modalShown cuando se hace zoom in
}

function zoomOut() {
  if (fontSize - increment >= minFontSize) {
    fontSize -= increment;
    document.body.style.fontSize = fontSize + "px";
  } else if (!modalShown) {
    modalShown = true;
    abrirModal('limiteModal');
  }
}

function toggleAccessibility() {
  var menu = document.getElementById("accessibility-menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

function increaseFontSize() {
  // Incrementar el tamaño de fuente
  document.body.style.fontSize = "larger";
}

function decreaseFontSize() {
  // Disminuir el tamaño de fuente
  document.body.style.fontSize = "smaller";
}

// JavaScript para mostrar/ocultar el menú de accesibilidad
function toggleAccessibility() {
  const accessibilityMenu = document.getElementById("accessibility-menu");
  accessibilityMenu.style.display = accessibilityMenu.style.display === "block" ? "none" : "block";

  const accessibilityBtn = document.getElementById("accessibility-btn");
  if (accessibilityMenu.style.display === "block") {
    accessibilityMenu.style.top = `${accessibilityBtn.offsetTop + accessibilityBtn.offsetHeight}px`;
    accessibilityMenu.style.left = `${accessibilityBtn.offsetLeft}px`;
  }
}
