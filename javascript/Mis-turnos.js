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
    if (window.location.pathname.endsWith('Mis-Turnos.html')) {
        document.getElementById('misTurnosBtn').classList.add('active-button');
    }

    // Check if we are on the "Mis Turnos" page
    if (window.location.pathname.endsWith('Mis-Turnos.html')) {
        const turnos = JSON.parse(localStorage.getItem('turnos')) || [];
        const turnosList = document.getElementById('turnosList');

        turnosList.innerHTML = ''; // Limpiamos la lista antes de agregar los turnos

        if (turnos.length > 0) {
            turnos.forEach((turno, index) => {
                const turnoRow = document.createElement('div');
                turnoRow.classList.add('turno-row');
                turnoRow.innerHTML = `
                    <div data-label="Fecha">${turno.fecha}</div>
                    <div data-label="Hora">${turno.hora}</div>
                    <div data-label="N° Turno">${turno.numeroDeTurno}</div>
                    <div data-label="Nombre del Paciente">${turno.nombre}</div>
                    <div data-label="Modo de Atención">${turno.modoAtencion}</div>
                    <div data-label=""><button class="cancel-button" onclick="cancelarTurno(${index})">Cancelar</button></div>
                `;
                turnosList.appendChild(turnoRow);
            });
        } else {
            const noTurnosMessage = document.createElement('p');
            noTurnosMessage.textContent = 'No tienes turnos reservados.';
            turnosList.appendChild(noTurnosMessage);
        }

        document.getElementById('turnosList').appendChild(turnosList);
    }
});

function cancelarTurno(index) {
    const turnos = JSON.parse(localStorage.getItem('turnos')) || [];
    turnos.splice(index, 1);
    localStorage.setItem('turnos', JSON.stringify(turnos));
    location.reload();
}
