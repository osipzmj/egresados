function cambiarEstado(boton) {
    if (boton.innerHTML === 'Inscribirme') {
        boton.innerHTML = 'Inscrito';
        boton.classList.add('inscrito');
    } else {
        boton.innerHTML = 'Inscribirme';
        boton.classList.remove('inscrito');
    }
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
