let dni, firstName, lastName, birthDate, banderaDatosValidos=false;

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('datosPersonalesForm').addEventListener('submit', function (e) {
        e.preventDefault();

        dni = document.getElementById('registerDni').value;
        firstName = document.getElementById('firstName').value;
        lastName = document.getElementById('lastName').value;
        birthDate = document.getElementById('birthDate').value;

		if (localStorage.getItem(dni)) {
			banderaDatosValidos=false;
            return;
        }
		
		showInfoCuenta();
    });
});

document.querySelector('#confirmPassword').addEventListener('change', ()=>{
	const password = document.getElementById('registerPassword').value;
	const confirmPassword = document.getElementById('confirmPassword').value;

	if (password !== confirmPassword) {
		document.getElementById('errorContraseña').innerHTML+=`<p>Error, las contraseñas no coinciden.</p>`;
		document.getElementById('confirmPassword').classList.add('error');
	}
	else{
		document.getElementById('errorContraseña').innerHTML=``;
		document.getElementById('confirmPassword').classList.remove('error');
	}
});

document.querySelector('#registerDni').addEventListener('change', ()=>{
	dni = document.getElementById('registerDni').value;

	if (localStorage.getItem(dni)) {
		document.getElementById('errorDni').innerHTML+=`<p>Error, el dni ya fue registrado.</p>`;
		document.getElementById('registerDni').classList.add('error');
	}
	else{
		document.getElementById('errorDni').innerHTML=``;
		document.getElementById('registerDni').classList.remove('error');
		banderaDatosValidos = true;
	}
});

document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('registerForm').addEventListener('submit', function (e) {
		e.preventDefault();

		const email = document.getElementById('email').value;
		const password = document.getElementById('registerPassword').value;
		const confirmPassword = document.getElementById('confirmPassword').value;

		if (password !== confirmPassword) {
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

		localStorage.setItem(dni, JSON.stringify(user));
		
		//alert('Registro exitoso');
		$('#mensajeModal').show();
		document.getElementById('seccionInfoCuenta').style="opacity: 30%"
	});
});

function cerrarModal() {
	$('#mensajeModal').hide();
	window.location.href = 'Inicia-sesion.html';
}

function showDatosPersonales() {
    document.getElementById('seccionDatosPersonales').style.display = 'block';
    document.getElementById('seccionInfoCuenta').style.display = 'none';
}

function showInfoCuenta() {
    document.getElementById('seccionDatosPersonales').style.display = 'none';
    document.getElementById('seccionInfoCuenta').style.display = 'block';
}

function showInicioSesion() {
	window.location.href = 'Inicia-sesion.html';
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
		if (currentStep < progressListItems.length - 1 && banderaDatosValidos===true) { 
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