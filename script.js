const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const eMail = document.getElementById("eMail");
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
const address = document.getElementById("address")
const zipCode = document.getElementById("zipCode")
const ort = document.getElementById("ort")





 form.addEventListener('submit', (e) => {
     e.preventDefault();
     
     checkInputs();
 })

 function checkInputs(){
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const eMailValue = eMail.value.trim();
    const passwordValue = password.value.trim(); 
    const confirmPasswordValue = confirmPassword.value.trim(); 
    const birthDateValue = birthDate.value.trim();
    const addressValue = address.value.trim(); 
    

    if(firstNameValue < 2) {
		setErrorFor(firstName, 'Förnamn måste vara minst 2 tecken');
	} else {
		setSuccessFor(firstName);
	}
	
    if(lastNameValue < 2 ) {
		setErrorFor(lastName, 'Efternamn måste vara minst 2 tecken');
	} else {
		setSuccessFor(lastName);
	}

	if(eMailValue === '') {
		setErrorFor(eMail, 'Får ej vara tomt');
	} else if (!isEmail(eMailValue)) {
		setErrorFor(eMail, 'Inte en giltig e-postadress');
	} else {
		setSuccessFor(eMail);
	}

    if(birthDateValue === '') {
		setErrorFor(birthDate, 'För att registrera sig så måste man vara över 18år.');
	} else {
		setSuccessFor(birthDate);
	}

    if(addressValue === '') {
		setErrorFor(address, 'adress måste minst ha två tecken och postnumret måste vara fem tecken.');
	} else {
		setSuccessFor(address);
	}


	
	if(passwordValue === '') {
		setErrorFor(password, 'Måste innehålla minst åtta tecken');
	} else {
		setSuccessFor(password);
	}
	
	if(confirmPasswordValue === '') {
		setErrorFor(confirmPassword, 'Måste innehålla minst åtta tecken');
	} else if(passwordValue !== confirmPasswordValue) {
		setErrorFor(confirmPassword, 'Matchar inte med lösenord');
	} else{
		setSuccessFor(confirmPassword);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(eMail) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(eMail);
}













