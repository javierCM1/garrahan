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
    document.getElementById('turnoForm').style.display = 'none';
    document.getElementById('patientForm').style.display = 'block';
}

function showConsultaForm() {
    document.getElementById('patientForm').style.display = 'none';
    document.getElementById('consultaForm').style.display = 'block';
}

function showPatientForm() {
    document.getElementById('grupoFamiliarForm').style.display = 'none';
    document.getElementById('patientForm').style.display = 'block';
}*/

let tipoTurno;
let paciente;

function showConsultaForm(idNombreRecibido) {
    document.getElementById('grupoFamiliarForm').style.display = 'none';
    document.getElementById('consultaForm').style.display = 'block';

    let id = document.getElementById(idNombreRecibido).id;

    if(id == 'idNombre1'){
        paciente='Apellido, Nombre1';
    }else if(id == 'idNombre2'){
        paciente='Apellido, Nombre2';
    }else{
        //mostrar modal "En construcción" ->
        alert('En construcción...');
        document.getElementById('grupoFamiliarForm').style.display = 'block';
    }

    document.getElementById('idPacienteConsulta').innerHTML+=`Paciente: ${paciente} <img src="./logos/quitarSeleccion.png" alt="" id="quitarSeleccion">`;
}

function showFamilyGroupForm() {
    document.getElementById('turnoForm').style.display = 'none';
    document.getElementById('grupoFamiliarForm').style.display = 'block';
}

function cambiarSeleccion(opcionSeleccionada, opcionNoSeleccionada1, opcionNoSeleccionada2) {
    document.getElementById(opcionNoSeleccionada1).classList.remove("seleccionado");
    document.getElementById(opcionNoSeleccionada2).classList.remove("seleccionado");
    document.getElementById(opcionSeleccionada).classList.add("seleccionado");
    
    if(opcionSeleccionada =='opcion-consulta')
    {
        tipoTurno="Consulta médica";
    }
    else if(opcionSeleccionada == 'opcion-laboratorio')
    {
        tipoTurno="Laboratorio";
    }
    else
    {
        tipoTurno="Diagnóstico por imágenes";
    }

    document.getElementById('idTipoConsulta').innerHTML+=`Tipo de turno: ${tipoTurno} <img src="./logos/quitarSeleccion.png" alt="" id="quitarSeleccion">`;
}

function backToTurnoForm() {
    document.getElementById('grupoFamiliarForm').style.display = 'none';
    document.getElementById('consultaForm').style.display = 'none';
    document.getElementById('turnoForm').style.display = 'block';
}

function backToGrupoFamiliarForm() {
    document.getElementById('turnoForm').style.display = 'none';
    document.getElementById('consultaForm').style.display = 'none';
    document.getElementById('grupoFamiliarForm').style.display = 'block';
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
});