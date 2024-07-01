let tipoTurno;
let paciente;
let banderaTurnoGuardado=false;
let banderaRequisitosTurno=false;

function showConsultaForm() {
    document.getElementById('turnoForm').style.display = 'none';
    document.getElementById('grupoFamiliarForm').style.display = 'none';
    document.getElementById('consultaForm').style.display = 'block';

    if(paciente==='en_construccion'){
        document.getElementById('grupoFamiliarForm').style.display = 'block';
        document.getElementById('consultaForm').style.display = 'none';
    }
}

function guardarNombrePaciente(idNombreRecibido, noSel1, noSel2) {
    document.getElementById(noSel1).classList.remove("seleccionado");
    document.getElementById(noSel2).classList.remove("seleccionado");
    document.getElementById(idNombreRecibido).classList.add("seleccionado");

    let id = document.getElementById(idNombreRecibido).id;

    if(id == 'idNombre1'){
        paciente='González, Julián';
    }else if(id == 'idNombre2'){
        paciente='González, Julieta';
    }else{
        paciente='en_construccion';

        $('#mensajeModal').show();
        
        document.getElementById('seccionTurnos').classList.add('backdrop');
        document.getElementById('contenedorTituloModal').innerHTML=`
                    <img src="./logos/error.png" alt="error" class="imagenModal" style="display: inline;">
                    <h5 class="modal-title" id="txtModal">Disculpá las molestias</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="cerrarModal()">
                        <span aria-hidden="true">&times;</span>
                    </button>`;
        document.getElementById('contenedorBodyModal').innerHTML=`<p>La sección a la que tratás de acceder se encuentra en construcción.</p>`;        
    }

    if(paciente!='en_construccion')
    {
        document.getElementById('paso2').innerHTML=`<strong>Paciente</strong>`;
        document.getElementById('paso2').innerHTML+=`: ${paciente}`;
    }
}

function cerrarModal() {
	$('#mensajeModal').hide();
    document.getElementById('seccionTurnos').classList.remove('backdrop');
    if(banderaTurnoGuardado && !banderaRequisitosTurno){
        window.location.href = 'Mis-Turnos.html'; // Redirigir a Mis Turnos después de guardar
    }
    if(banderaRequisitosTurno){
        banderaRequisitosTurno = false;
        $('#mensajeModal').show();
            
        document.getElementById('seccionTurnos').classList.add('backdrop');
        document.getElementById('contenedorTituloModal').innerHTML=`
                    <img src="./logos/tildeExito.png" alt="tildeExito" class="imagenModal" style="display: inline;">
                    <h5 class="modal-title" id="txtModal">Turno registrado exitosamente</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="cerrarModal()">
                        <span aria-hidden="true">&times;</span>
                    </button>`;
        document.getElementById('contenedorBodyModal').hidden=true;
    }
}

function showFamilyGroupForm() {
    document.getElementById('turnoForm').style.display = 'none';
    document.getElementById('consultaForm').style.display = 'none';
    document.getElementById('pacientesForm').style.display = 'block';

    generarEspecialidades();
}

function showTurnoForm() {
    document.getElementById('turnoForm').style.display = 'block';
    document.getElementById('grupoFamiliarForm').style.display = 'none';
    document.getElementById('consultaForm').style.display = 'none';
}

function cambiarSeleccion(opcionSeleccionada, opcionNoSeleccionada1, opcionNoSeleccionada2) {
    document.getElementById(opcionNoSeleccionada1).classList.remove("seleccionado");
    document.getElementById(opcionNoSeleccionada2).classList.remove("seleccionado");
    document.getElementById(opcionSeleccionada).classList.add("seleccionado");
    
    if(opcionSeleccionada =='opcion-consulta')
        tipoTurno="Consulta médica";
    else if(opcionSeleccionada == 'opcion-laboratorio')
        tipoTurno="Laboratorio";
    else
        tipoTurno="Diagnóstico por imágenes";

    document.getElementById('paso1').innerHTML=`<strong>Tipo de turno</strong>`;
    document.getElementById('paso1').innerHTML+=`: ${tipoTurno}`;
}

function generarEspecialidades() {
    if(tipoTurno == 'Diagnóstico por imágenes'){
        especialidad.innerHTML = '';

        let opcion1 = document.createElement('option');
        opcion1.value = 'Radiografía';
        opcion1.innerHTML = `Radiografía`;
        
        let opcion2 = document.createElement('option');
        opcion2.value = 'Ecografía';
        opcion2.innerHTML = `Ecografía`;

        let opcion3 = document.createElement('option');
        opcion3.value = 'Tomografía';
        opcion3.innerHTML = `Tomografía`;
        
        let opcion4 = document.createElement('option');
        opcion4.value = 'Colonoscopía';
        opcion4.innerHTML = `Colonoscopía`;

        let opcion5 = document.createElement('option');
        opcion5.value = 'Eco-doppler';
        opcion5.innerHTML = `Eco-doppler`;

        let opcion6 = document.createElement('option');
        opcion6.value = 'Resonancia magnética';
        opcion6.innerHTML = `Resonancia magnética`;

        especialidad.appendChild(opcion1);
        especialidad.appendChild(opcion2);
        especialidad.appendChild(opcion3);
        especialidad.appendChild(opcion4);
        especialidad.appendChild(opcion5);
        especialidad.appendChild(opcion6);

        document.getElementById('modoDeAtencion').hidden = true;
        document.getElementById('presencial').checked = true;
    }
    else if(tipoTurno == 'Laboratorio'){
        especialidad.innerHTML = '';
        
        let opcion1 = document.createElement('option');
        opcion1.value = 'Análisis de sangre';
        opcion1.innerHTML = `Análisis de sangre`;
        
        let opcion2 = document.createElement('option');
        opcion2.value = 'Análisis de orina';
        opcion2.innerHTML = `Análisis de orina`;

        especialidad.appendChild(opcion1);
        especialidad.appendChild(opcion2);

        document.getElementById('modoDeAtencion').hidden = true;
        document.getElementById('presencial').checked = true;
    }
    else{
        document.getElementById('especialidad').innerHTML=`
            <option value="Cardiologia">Cardiología</option>
            <option value="Escoliosis">Escoliosis</option>
            <option value="Oftalmologia">Oftalmología</option>
            <option value="Traumatologia">Traumatología</option>
            <option value="_separacion_">----- Nuevas especialidades -----</option>
            <option value="Adolescencia">Adolescencia</option>
            <option value="Cirugia general">Cirugía General</option>
            <option value="Cirugia plastica">Cirugía Plástica</option>
            <option value="Clinica">Clínica</option>
            <option value="Clinica interdisciplinarias">Clínica Interdisciplinarias</option>
            <option value="Crecimiento desarrollo">Crecimiento y Desarrollo</option>
            <option value="Dermatologia">Dermatología</option>
            <option value="Diabetes">Diabetes</option>
            <option value="Endocrinologia">Endocrinología</option>
            <option value="Endoscopia respiratoria">Endoscopia Respiratoria</option>
            <option value="Gastroenterologia">Gastroenterología</option>
            <option value="Genetica">Genética</option>
            <option value="Ginecologia">Ginecología</option>
            <option value="Hepatologia">Hepatología</option>
            <option value="Infectologia">Infectología</option>
            <option value="Inmunologia">Inmunología</option>
            <option value="Intoxicaciones">Intoxicaciones</option>
            <option value="Nefrologia">Nefrología</option>
            <option value="Neumonologia">Neumonología</option>
            <option value="Neurocirugia">Neurocirugía</option>
            <option value="Neurologia">Neurología</option>
            <option value="Nutricion">Nutrición</option>
            <option value="Otorrinolaringologia">Otorrinolaringología</option>
            <option value="Reumatologia">Reumatología</option>
            <option value="Urologia">Urología</option>`;

        document.getElementById('modoDeAtencion').hidden = false;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

    if (loggedInUser) {
        document.getElementById('user-name').innerText = loggedInUser.firstName + ' ' + loggedInUser.lastName;
    }

    document.getElementById('logoutBtn').addEventListener('click', function () {
        localStorage.removeItem('loggedInUser');
        window.location.href = 'inicia-sesion.html';
    });

    document.getElementById('misTurnosBtn').addEventListener('click', function () {
        window.location.href = 'Mis-Turnos.html';
    });

    document.getElementById('reservarTurnoBtn').addEventListener('click', function () {
        window.location.href = 'Turnos.html';
    });

    // Cambiar color del botón activo
    if (window.location.pathname.endsWith('Turnos.html')) {
        document.getElementById('reservarTurnoBtn').classList.add('active-button');
    }
});

// Handler for the final form submission
const consultaForm = document.querySelector('#consultaForm form');
if (consultaForm) {
    consultaForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Capturamos los valores del formulario
        const turno = {
            fecha: document.getElementById('fechaConsulta').value,
            hora: document.getElementById('horaConsulta').value,
            numeroDeTurno: Math.floor(Math.random() * 1000000), // Número de turno aleatorio
            nombre: document.getElementById('nombre').value,
            modoAtencion: document.querySelector('input[name="modoAtencion"]:checked').value,
            motivo: document.getElementById('motivoConsulta').value,
            especialidad: document.getElementById('especialidad').value
        };

        if(tipoTurno === 'Consulta médica'){
            evaluarEspecialidad(document.getElementById('especialidad').value);
        }
        
        let turnos = JSON.parse(localStorage.getItem('turnos')) || [];
        turnos.push(turno);
        localStorage.setItem('turnos', JSON.stringify(turnos));
        
        banderaTurnoGuardado = true;

        if(banderaTurnoGuardado && !banderaRequisitosTurno){
            $('#mensajeModal').show();
            
            document.getElementById('seccionTurnos').classList.add('backdrop');
            document.getElementById('contenedorTituloModal').innerHTML=`
                        <img src="./logos/tildeExito.png" alt="tildeExito" class="imagenModal" style="display: inline;">
                        <h5 class="modal-title" id="txtModal">Turno registrado exitosamente</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="cerrarModal()">
                            <span aria-hidden="true">&times;</span>
                        </button>`;
            document.getElementById('contenedorBodyModal').hidden=true;
        }
    });
}

function findIndexfromOptionName( select, optionName ) {
    let options = Array.from( select.options );
    return options.findIndex( (opt) => opt.value == optionName );
}

function evaluarEspecialidad(especialidad) {
    let espIndex = findIndexfromOptionName(document.getElementById('especialidad'), especialidad);
    let separacionIndex = findIndexfromOptionName(document.getElementById('especialidad'), '_separacion_');

    if(espIndex > separacionIndex){
        banderaRequisitosTurno = true;
        $('#mensajeModal').show();
    
        document.getElementById('seccionTurnos').classList.add('backdrop');
        document.getElementById('contenedorTituloModal').innerHTML=`
                    <img src="./logos/precaucion.png" alt="precaucion" class="imagenModal" style="display: inline;">
                    <h5 class="modal-title" id="txtModal">Requisitos para confirmar el turno</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="cerrarModal()">
                        <span aria-hidden="true">&times;</span>
                    </button>`;
        document.getElementById('contenedorBodyModal').innerHTML=`
                    <h6>Antes de continuar es muy importante, para agilizar todo el proceso, que cuentes con:</h6>
                    <p>Derivación de la o el pediatra, del centro de salud u hospital en el que se atiende el paciente, con el motivo de consulta en un hospital de alta complejidad.</p>
                    <p>Resumen de Historia Clínica y estudios realizados hasta el momento</p>`;
    }
}

document.addEventListener("DOMContentLoaded", function () { 
	const progressListItems = document.querySelectorAll("#progressbar li"); 
	const progressBar = document.querySelector(".progress-bar"); 
	let currentStep = 0; 

	function updateProgress() { 
		const percent = (currentStep / (progressListItems.length - 1)) * 100; 
		progressBar.style.width = percent + "%"; 

		progressListItems.forEach((item, index) => { 
			if (index === currentStep) { 
				item.classList.add("active"); 
			} else { 
				item.classList.remove("active");
			} 
		}); 
	} 

	function nextStep() { 
		if (currentStep < progressListItems.length - 1) { 
			currentStep++; 
			//showStep(currentStep); 
			updateProgress(); 
		} 
	} 

	function prevStep() { 
		if (currentStep > 0) { 
			currentStep--; 
			//showStep(currentStep); 
			updateProgress(); 
		} 
	} 

	const nextStepButtons = document.querySelectorAll(".Continuar"); 
	const prevStepButtons = document.querySelectorAll(".atras"); 

	nextStepButtons.forEach((button) => { 
		button.addEventListener("click", nextStep); 
	}); 

	prevStepButtons.forEach((button) => { 
		button.addEventListener("click", prevStep); 
	}); 
});









let pacientes = JSON.parse(sessionStorage.getItem('pacientes')) || [];
let pacienteSeleccionado = null;

function mostrarFormularioPaciente() {
    document.getElementById('pacientesForm').style.display = 'none';
    document.getElementById('patientForm').style.display = 'block';
}

function guardarPaciente() {
    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const historia = document.getElementById('historia').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const direccion = document.getElementById('direccion').value;
    const telefono = document.getElementById('telefono').value;

    const nuevoPaciente = {
        nombre,
        dni,
        historia,
        fechaNacimiento,
        direccion,
        telefono
    };

    pacientes.push(nuevoPaciente);
    sessionStorage.setItem('pacientes', JSON.stringify(pacientes));
    actualizarListaPacientes();
    document.getElementById('patientForm').style.display = 'none';
    document.getElementById('pacientesForm').style.display = 'block';
}

function actualizarListaPacientes() {
    const container = document.getElementById('pacientes-container');
    container.innerHTML = '';

    if (pacientes.length === 0) {
        container.innerHTML = '<p>No tienes pacientes registrados. Por favor, agrega uno.</p>';
    } else {
        pacientes.forEach((paciente, index) => {
            const pacienteCard = document.createElement('div');
            pacienteCard.className = 'form-group col-md-2';
            pacienteCard.innerHTML = `
                <button type="button" class="card-link btn" onclick="guardarNombrePaciente('paciente-${index}')">
                    <div id="paciente-${index}" class="card">
                        <div class="card-body">
                            <h5 class="card-title">${paciente.nombre}</h5>
                            <p class="card-text">${paciente.dni}</p>
                            <p class="card-text">Historia clínica ${paciente.historia}</p>
                        </div>
                    </div>
                </button>
            `;
            container.appendChild(pacienteCard);
        });
    }
}

function eliminarPaciente(index) {
    pacientes.splice(index, 1);
    sessionStorage.setItem('pacientes', JSON.stringify(pacientes));
    actualizarListaPacientes();
}

function guardarNombrePaciente(idNombreRecibido) {
    const index = parseInt(idNombreRecibido.split('-')[1], 10);
    pacienteSeleccionado = pacientes[index];
    document.getElementById('continuarBtn').disabled = false;
}

function showTurnoForm() {
    document.getElementById('turnoForm').style.display = 'block';
    document.getElementById('pacientesForm').style.display = 'none';
    document.getElementById('consultaForm').style.display = 'none';
}

function showConsultaForm() {
    if (pacienteSeleccionado) {
        document.getElementById('turnoForm').style.display = 'none';
        document.getElementById('pacientesForm').style.display = 'none';
        document.getElementById('consultaForm').style.display = 'block';
    } else {
        alert('Por favor, seleccione un paciente.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    actualizarListaPacientes();
});

function mostrarFormularioPacientes() {
    document.getElementById('pacientesForm').style.display = 'block';
    document.getElementById('patientForm').style.display = 'none';
  
}