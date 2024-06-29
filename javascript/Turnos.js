/*function toggleTurnoOptions() {
    const turnoType = document.getElementById('turnoType').value;
    const consultaOptions = document.getElementById('consultaOptions');
    
    if (turnoType === 'consulta') {
        consultaOptions.style.display = 'block';
    } else {
        consultaOptions.style.display = 'none';
    }
}

function showPatientForm() {
    if (document.getElementById('turnoType').value === '' ||
        (document.getElementById('turnoType').value === 'consulta' && document.getElementById('consultaType').value === '')) {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }
    document.getElementById('turnoForm').style.display = 'none';
    document.getElementById('consultaForm').style.display = 'none'; // Ocultar la sección de consulta si estaba visible
    document.getElementById('patientForm').style.display = 'block';
}

function showConsultaForm() {
    if (document.getElementById('nombre').value === '' ||
        document.getElementById('dni').value === '' ||
        document.getElementById('historia').value === '' ||
        document.getElementById('fechaNacimiento').value === '' ||
        document.getElementById('provincia').value === '' ||
        document.getElementById('localidad').value === '' ||
        document.getElementById('telefono1').value === '' ||
        document.getElementById('email').value === '') {
        alert("Por favor, complete todos los campos obligatorios.");
        return;
    }
    document.getElementById('patientForm').style.display = 'none';
    document.getElementById('turnoForm').style.display = 'none'; // Ocultar la sección de turno si estaba visible
    document.getElementById('consultaForm').style.display = 'block';
}

function showPatientForm() {
    document.getElementById('grupoFamiliarForm').style.display = 'none';
    document.getElementById('patientForm').style.display = 'block';
}*/

let tipoTurno;
let paciente;

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
        paciente='Apellido, Nombre1';
    }else if(id == 'idNombre2'){
        paciente='Apellido, Nombre2';
    }else{
        //mostrar modal "En construcción" ->
        paciente='en_construccion';
        alert('En construcción...');
    }
}

function showFamilyGroupForm() {
    document.getElementById('turnoForm').style.display = 'none';
    document.getElementById('consultaForm').style.display = 'none';
    document.getElementById('grupoFamiliarForm').style.display = 'block';
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
            nombre: paciente,
            modoAtencion: document.querySelector('input[name="modoAtencion"]:checked').value,
            motivo: document.getElementById('motivoConsulta').value,
            especialidad: document.getElementById('especialidad').value
        };
        
        let turnos = JSON.parse(localStorage.getItem('turnos')) || [];
        turnos.push(turno);
        localStorage.setItem('turnos', JSON.stringify(turnos));

        window.location.href = 'Mis-Turnos.html'; // Redirigir a Mis Turnos después de guardar
    });
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

	// function showStep(stepIndex) { 
	// 	const steps = 
	// 		document.querySelectorAll(".step-container fieldset"); 
	// 	steps.forEach((step, index) => { 
	// 		if (index === stepIndex) { 
	// 			step.style.display = "block"; 
	// 		} else { 
	// 			step.style.display = "none"; 
	// 		} 
	// 	}); 
	// } 

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
