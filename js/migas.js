// Obtener el nombre de la página actual
const currentPage = window.location.pathname.split('/').pop();

// Obtener todos los botones del menú
const buttons = document.querySelectorAll('.side-menu button');

// Función para resaltar el botón correspondiente a la página actual
function resaltarBoton() {
  buttons.forEach(button => {
    const buttonText = button.textContent.toLowerCase().replace(' ', '_');
    if (currentPage.includes(buttonText)) {
      button.classList.add('activo');
    } else {
      button.classList.remove('activo');
    }
  });
}

// Llamar a la función al cargar la página
window.addEventListener('DOMContentLoaded', resaltarBoton);
