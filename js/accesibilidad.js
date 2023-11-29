let fontSize = 16; // Tamaño de fuente base en px
let fontSize2 = 80;
const increment = 2; // Incremento/decremento en px
const minFontSize = 12; // Tamaño de fuente mínimo permitido
let modalShown = false;
let readingActive = false;
let currentUtterance = null;
let highContrastMode = false;

function zoomIn() {
    fontSize += increment;
    document.body.style.fontSize = fontSize + "px";

    var elementsToZoom = document.querySelectorAll("p, h1, h2, h3, h4, h5, button, span, div");
    elementsToZoom.forEach(function(element) {
        element.style.fontSize = fontSize + "px";
    });

    modalShown = false; // Restablecer modalShown cuando se hace zoom in
}

function zoomIn2() {
    fontSize2 += increment;
    document.body.style.fontSize = fontSize2 + "px";

    var elementsToZoom = document.querySelectorAll("h1");
    elementsToZoom.forEach(function(element) {
        element.style.fontSize = fontSize2 + "px";
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

function zoomOut2() {
    if (fontSize2 - increment >= minFontSize) {
        fontSize2 -= increment;
        document.body.style.fontSize = fontSize2 + "px";

        var elementsToZoom = document.querySelectorAll("h1");
        elementsToZoom.forEach(function(element) {
            element.style.fontSize = fontSize2 + "px";
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

// CONTRASTE

function toggleContrastMode() {
    highContrastMode = !highContrastMode;

    const body = document.body;

    if (highContrastMode) {
        body.style.backgroundColor = "black";
        body.style.color = "white";
    } else {
        body.style.backgroundColor = "";
        body.style.color = "";
    }
}
  
// VOZ

const recognition = new window.webkitSpeechRecognition();

recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript;
};

function startListening() {
    recognition.start();
}

recognition.onresult = function (event) {
    const transcript = event.results[0][0].transcript.toLowerCase();

    if (transcript.includes("seguimiento")) {
        window.location.href = "/html/seguimiento.html";
    } else if (transcript.includes("bolsa de trabajo")) {
        window.location.href = "/html/bolsa_trabajo.html";
    } else if (transcript.includes("educacion continua")) {
        window.location.href = "/html/educacion_continua.html";
    } else if (transcript.includes("inicio")) {
        window.location.href = "/html/index.html";
    } else if (transcript.includes("eventos")) {
        window.location.href = "/html/index.html#evt";
    } else if (transcript.includes("conferencias")) {
        abrirModal('miModal1');
    } else if (transcript.includes("feria de trabajo")) {
        abrirModal('miModal2');
    } else if (transcript.includes("iniciar proceso")) {
        abrirModal('miModal');
    } 
};

