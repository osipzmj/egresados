/*BUSQUEDA CONFERENCIAS*/
function buscarConferencias() {
  const input = document.getElementById('busqueda');
  const filter = input.value.toUpperCase();
  const conferencias = document.querySelectorAll('.conf1');

  conferencias.forEach(conferencia => {
    const titulo = conferencia.querySelector('.ptitle');
    const textoConferencia = titulo.textContent || titulo.innerText;

    if (textoConferencia.toUpperCase().indexOf(filter) > -1) {
      conferencia.style.display = '';
    } else {
      conferencia.style.display = 'none';
    }
  });
}

function filtrarPorEspecialidad() {
  mostrarCarga(); // Mostrar la pantalla de carga antes de la operación

  const selectEspecialidad = document.getElementById('especialidad');
  const especialidadSeleccionada = selectEspecialidad.value.toUpperCase();
  const conferencias = document.querySelectorAll('.conf1');

  conferencias.forEach(conferencia => {
    const especialidad = conferencia.querySelector('.texto-ejemplo');
    const textoEspecialidad = especialidad.textContent || especialidad.innerText;

    if (especialidadSeleccionada === 'TODAS' || textoEspecialidad.toUpperCase() === especialidadSeleccionada) {
      conferencia.style.display = '';
    } else {
      conferencia.style.display = 'none';
    }
  });

  // Simulación de una demora de 2 segundos para la operación
  setTimeout(function() {
    ocultarCarga(); // Ocultar la pantalla de carga después de la operación
  }, 1000);
}


/*BUSQUEDA MASTER*/

const contenido = [
  { ruta: '../html/bolsa_trabajo.html', nombre: 'Bolsa de trabajo' },
  { ruta: '../html/educacion_continua.html', nombre: 'Educación continua' },
  { ruta: '../html/index.html', nombre: 'Inicio' },
  { ruta: '../html/seguimiento.html', nombre: 'Seguimiento' }
  // Agrega más archivos según sea necesario
];


function buscar() {
  const input = document.getElementById('busqueda');
  const resultados = document.getElementById('resultadosBusqueda');

  const filtro = input.value.toLowerCase();
  const coincidencias = contenido.filter(item => item.nombre.toLowerCase().includes(filtro));

  if (coincidencias.length > 0) {
    resultados.innerHTML = '';
    coincidencias.forEach(resultado => {
      const link = document.createElement('a');
      link.href = resultado.ruta;
      link.textContent = resultado.nombre;
      resultados.appendChild(link);
    });
    resultados.style.display = 'block';
  } else {
    resultados.style.display = 'none';
  }
}