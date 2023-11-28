let fontSize = 16; // Tamaño de fuente base en px
const increment = 2; // Incremento/decremento en px
const minFontSize = 12; // Tamaño de fuente mínimo permitido
let modalShown = false;
let readingActive = false;
let currentUtterance = null;

function zoomIn() {
    fontSize += increment;
    document.body.style.fontSize = fontSize + "px";

    var elementsToZoom = document.querySelectorAll("p, h1, h2, h3, h4, h5, button, span, div");
    elementsToZoom.forEach(function(element) {
        element.style.fontSize = fontSize + "px";
    });

    modalShown = false; // Restablecer modalShown cuando se hace zoom in
}


function zoomOut() {
    if (fontSize - increment >= minFontSize) {
        fontSize -= increment;
        document.body.style.fontSize = fontSize + "px";

        var elementsToZoom = document.querySelectorAll("p, h1, h2, h3, h4, h5, button, span, div");
        elementsToZoom.forEach(function(element) {
            element.style.fontSize = fontSize + "px";
        });
    } else if (!modalShown) {
        modalShown = true;
        abrirModal('limiteModal');
    }
}


function toggleAccessibility() {
    const accessibilityMenu = document.getElementById("accessibility-menu");
    accessibilityMenu.style.display = accessibilityMenu.style.display === "block" ? "none" : "block";

    const accessibilityBtn = document.getElementById("accessibility-btn");
    if (accessibilityMenu.style.display === "block") {
        accessibilityMenu.style.top = `${accessibilityBtn.offsetTop + accessibilityBtn.offsetHeight}px`;
        accessibilityMenu.style.left = `${accessibilityBtn.offsetLeft}px`;
    }
}

// Cerrar el menú de accesibilidad si se hace clic fuera de él
document.addEventListener('click', function(event) {
    const accessibilityMenu = document.getElementById("accessibility-menu");
    const accessibilityBtn = document.getElementById("accessibility-btn");
    if (!accessibilityBtn.contains(event.target) && !accessibilityMenu.contains(event.target)) {
        accessibilityMenu.style.display = "none";
    }
});

// Leer con selección:)

function readSelectedText() {
    var selectedText = getSelectedText();
    if (selectedText) {
        leerTexto(selectedText);
    }
}

function getSelectedText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text.trim();
}

function leerTexto(texto) {
    var synth = window.speechSynthesis;
    var utterance = new SpeechSynthesisUtterance(texto);
    synth.speak(utterance);
}

// Leer todo

function readContent() {
    var contenido = document.body.innerText;
    leerTexto(contenido);
}

// Leer con cursor

function toggleReadingMode() {
    readingActive = !readingActive;
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div"); 

    if (readingActive) {
        textElements.forEach((element) => {
            element.addEventListener("mouseover", readContent);
            element.addEventListener("mouseout", stopReading);
        });
    } else {
        textElements.forEach((element) => {
            element.removeEventListener("mouseover", readContent);
            element.removeEventListener("mouseout", stopReading);
        });
        stopReading();
    }
}

function readContent(event) {
    const contenido = event.target.innerText;
    currentUtterance = new SpeechSynthesisUtterance(contenido);
    window.speechSynthesis.speak(currentUtterance);
}

function stopReading() {
    if (currentUtterance) {
        window.speechSynthesis.cancel(currentUtterance);
        currentUtterance = null;
    }
}

const btnContraste = document.getElementById('btnContraste');

    btnContraste.addEventListener('click', function() {
      document.body.classList.toggle('alto-contraste');
    });