function toggleTurnoOptions() {
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

function showTurnoForm() {
    document.getElementById('patientForm').style.display = 'none';
    document.getElementById('consultaForm').style.display = 'none'; // Ocultar la sección de consulta si estaba visible
    document.getElementById('turnoForm').style.display = 'block';
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
        window.location.href = 'Turnos.html'; // Asegúrate de que esta sea la URL correcta para reservar un turno
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
            motivo: document.getElementById('motivoConsulta').value
        };

        let turnos = JSON.parse(localStorage.getItem('turnos')) || [];
        turnos.push(turno);
        localStorage.setItem('turnos', JSON.stringify(turnos));

        window.location.href = 'Mis-Turnos.html'; // Redirigir a Mis Turnos después de guardar
    });
}