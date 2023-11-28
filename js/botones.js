function mostrarFormulario() {
  abrirModal('formulario');
  limpiarFormulario();
}

function enviarFormulario(event) {
  event.preventDefault(); // Evita el envío por defecto del formulario
  // Aquí puedes procesar los datos del formulario si es necesario
  // Por ejemplo:
  // var nombre = document.getElementById('nombre').value;
  // var email = document.getElementById('email').value;
  
  // Simulación de envío exitoso del formulario después de 2 segundos
  setTimeout(function() {
    cerrarModal('formulario');
    mostrarModalInscrito();
    cambiarEstadoBoton();
  }, 2000);
}


function cambiarEstadoBoton() {
  var boton = document.querySelector('.miBoton');
  boton.innerHTML = 'Inscrito';
  boton.classList.add('inscrito');
}

function mostrarModalInscrito() {
  abrirModal('miModalInscrito');

  // Agregar un event listener para cerrar el modal al hacer clic fuera de él
  var modalInscrito = document.getElementById('miModalInscrito');
  modalInscrito.addEventListener('click', function(event) {
    if (event.target === modalInscrito) {
      cerrarModal('miModalInscrito');
    }
  });
}

function limpiarFormulario() {
  document.getElementById('miFormulario').reset();
}
// Resto de tu código para abrir/cerrar modales (abrirModal y cerrarModal)
// ...


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