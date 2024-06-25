document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const dni = document.getElementById('dni').value;
        const password = document.getElementById('password').value;

        const user = JSON.parse(localStorage.getItem(dni));

        if (!user) {
            alert('Usuario no registrado');
            return;
        }

        if (user.password !== password) {
            alert('Contraseña incorrecta');
            return;
        }

        // Aquí se guarda el objeto del usuario logueado en localStorage
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        alert('Inicio de sesión exitoso');
        window.location.href = 'Turnos.html';
    });
});