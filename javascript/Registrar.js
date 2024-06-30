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

function showDatosPersonales() {
    document.getElementById('seccionDatosPersonales').style.display = 'block';
    document.getElementById('seccionInfoCuenta').style.display = 'none';
}

function showInfoCuenta() {
    document.getElementById('seccionDatosPersonales').style.display = 'none';
    document.getElementById('seccionInfoCuenta').style.display = 'block';
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
			updateProgress(); 
		} 
	} 

	function prevStep() { 
		if (currentStep > 0) { 
			currentStep--;
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