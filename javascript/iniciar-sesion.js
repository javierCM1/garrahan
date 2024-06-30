document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const dni = document.getElementById('dni').value;
        const password = document.getElementById('password').value;

        const user = JSON.parse(localStorage.getItem(dni));

        if (!user) {
            $('#mensajeModal').show();
            document.getElementById('seccionInicioSesion').classList.add('backdrop');
            document.getElementById('txtModal').innerText='Usuario no registrado';
            return;
        }

        if (user.password !== password) {
            $('#mensajeModal').show();
            document.getElementById('seccionInicioSesion').classList.add('backdrop');
            document.getElementById('txtModal').innerText='Contraseña incorrecta';
            return;
        }

        // Aquí se guarda el objeto del usuario logueado en localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        window.location.href = 'Turnos.html';
    });
});

function cerrarModal() {
	$('#mensajeModal').hide();
    document.getElementById('seccionInicioSesion').classList.remove('backdrop');
}