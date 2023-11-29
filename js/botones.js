function mostrarFormulario(formularioId) {
  abrirModal(formularioId);
  limpiarFormulario(formularioId);
}

function enviarFormulario(event, formularioId, modalInscritoId) {
  event.preventDefault();

  setTimeout(function() {
    cerrarModal(formularioId);
    mostrarModalInscrito(modalInscritoId);
    cambiarEstadoBoton();
  }, 2000);
}

function cambiarEstadoBoton(botonId) {
  var boton = document.querySelector('#' + botonId);
  boton.innerHTML = 'Inscrito';
  boton.classList.add('inscrito');
}

function mostrarModalInscrito(modalInscritoId) {
  abrirModal(modalInscritoId);

  var modalInscrito = document.getElementById(modalInscritoId);
  modalInscrito.addEventListener('click', function(event) {
    if (event.target === modalInscrito) {
      cerrarModal(modalInscritoId);
    }
  });
}

function limpiarFormulario(formularioId) {
  document.getElementById(formularioId).reset();
}

// Obtener el botón por su ID
const egresadosBtn = document.getElementById('egresados-btn');

// Agregar un event listener para cuando el botón pierde el foco
egresadosBtn.addEventListener('blur', () => {
  egresadosBtn.classList.remove('focus'); // Quita la clase de enfoque
});

// Agregar un event listener para cuando el botón es enfocado
egresadosBtn.addEventListener('focus', () => {
  egresadosBtn.classList.add('focus'); // Agrega la clase de enfoque
});


//

function toggleButton(button) {
  button.classList.toggle("selected-button");
}
