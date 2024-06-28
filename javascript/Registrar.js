document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const dni = document.getElementById('registerDni').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const birthDate = document.getElementById('birthDate').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (password !== confirmPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        const user = {
            dni,
            firstName,
            lastName,
            birthDate,
            email,
            password,
        };

        if (localStorage.getItem(dni)) {
            alert('Este usuario ya está registrado');
            return;
        }

        localStorage.setItem(dni, JSON.stringify(user));
        alert('Registro exitoso');
        window.location.href = 'Inicia-sesion.html';
    });
});