document.addEventListener('DOMContentLoaded', function () {
    const loggedInUser = localStorage.getItem('loggedInUser');

    document.getElementById('turnos-link').addEventListener('click', function(event) {
        event.preventDefault();
        if (loggedInUser) {
            window.location.href = 'Turnos.html';
        } else {
            window.location.href = 'Inicia-sesion.html';
        }
    });
});