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
  }, 1000);
}

function cambiarEstadoBoton(botonId) {
  var boton = document.querySelector('.miBoton');
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

//

  function miFuncion() {
    // Aquí puedes agregar el código que deseas ejecutar cuando se hace clic en el botón
    alert("¡Hola! Has hecho clic en el botón flotante.");
  }


  //
  function redirigirYMostrarInfo(url) {
    // Redirige a la URL especificada
    window.location.href = url;

    // Muestra información diferente según la URL
    if (url === 'index.html') {
     url== 'preguntas.html'
    } else if (url === 'seguimiento.html') {
      url== 'bolsa_trabajo.html'
    }
    // Añade más condiciones según tus necesidades
  }