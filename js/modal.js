// Función para mostrar el modal al hacer clic en la tarjeta
function abrirModal(idModal) {
  document.getElementById(idModal).style.display = 'flex';
  // Agregar un event listener para cerrar el modal al hacer clic fuera de él
  window.addEventListener('click', function(event) {
    const modal = document.getElementById(idModal);
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.addEventListener('keydown', function (event) {
    var modal = document.getElementById(idModal);
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
});
}
  
    function cerrarModal(idModal) {
      document.getElementById(idModal).style.display = 'none';
    }
