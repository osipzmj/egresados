function mostrarCarga() {
    // Mostrar la pantalla de carga
    document.getElementById("overlay").style.display = "flex";
  }

  // Función para capturar los clics en los botones
  document.addEventListener("click", function(event) {
    // Verificar si el clic se realizó en un botón
    if (event.target.tagName === "BUTTON") {
      mostrarCarga(); // Llamar a la función de mostrar carga en cada clic de botón
    }
  });
  
  function ocultarCarga() {
    // Ocultar la pantalla de carga
    document.getElementById("overlay").style.display = "none";
  }
