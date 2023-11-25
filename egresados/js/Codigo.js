document.addEventListener("DOMContentLoaded", function() {
    fetch('../datos.json')
        .then(response => response.json())
        .then(data => {
            const empresasList = document.getElementById('empresas-list');
            let empresaHTML = ''; // Inicializamos una cadena vacía para almacenar el HTML de las empresas

            data.empresas.forEach((empresa, index) => {
                if (index % 3 === 0) {
                    // Si el índice es un múltiplo de 3, cerramos la fila anterior y comenzamos una nueva fila
                    if (index !== 0) {
                        empresaHTML += '</tr>'; // Cerramos la fila anterior
                    }
                    empresaHTML += '<tr>'; // Comenzamos una nueva fila
                }

                // Agregamos la celda con la información de la empresa a la fila actual
                empresaHTML += `
                    <td>
                        <div class="${empresa.nombre.toLowerCase().replace(' ', '')}" data-teme="${empresa.nombre.toLowerCase().replace(' ', '')}">
                            <img src="${empresa.imagen}" alt="${empresa.nombre}" style="width: 200px; height: auto;">
                            <h3>${empresa.nombre}</h3>
                            <section class="filter">
                                <label for="Emmpreza-select"></label>
                                <select class="size-select" onchange="obtenerEmpresaSeleccionada(this)">
                                    <option value="all">Ver vacantes</option>
                                    ${empresa.vacantes.map((vacante, index) => `<option value="${index}">${vacante.nombre}</option>`).join('')}
                                </select>
                            </section>
                        </div>
                    </td>
                `;

                if (index === data.empresas.length - 1) {
                    // Si es la última empresa, cerramos la última fila
                    empresaHTML += '</tr>';
                }
            });

            empresasList.insertAdjacentHTML('beforeend', empresaHTML); // Insertamos el HTML generado en el contenedor de empresas
        });
});


function obtenerEmpresaSeleccionada(selectedEmpresa) {
    var empresa = selectedEmpresa.parentNode.parentNode.classList[0];
    var selectedVacante = selectedEmpresa.value;
    var vacante = obtenerVacante(empresa, selectedVacante);
    //mostrarModal(vacante);
}

function obtenerVacante(empresa, selectedVacante) {
    fetch('../datos.json')
        .then(response => response.json())
        .then(data => {
            var empresaSeleccionada = data.empresas.find(emp => emp.nombre.toLowerCase().replace(' ', '') === empresa);
            var vacanteSeleccionada = empresaSeleccionada.vacantes[selectedVacante];
            console.log(vacanteSeleccionada);
            mostrarModal(vacanteSeleccionada);
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}


function mostrarModal(vacante) {
    document.getElementById('modalImagen').src = vacante.imagen;
    document.getElementById('modalTitle').textContent = vacante.nombre;
    document.getElementById('modalRequisitos').textContent = vacante.requisitos;
    // Aquí puedes mostrar tu modal de la forma que desees, por ejemplo:
    document.getElementById('miModal').style.display = 'block';
}

document.getElementById('closeButton').addEventListener('click', function() {
    document.getElementById('miModal').style.display = 'none';
});

