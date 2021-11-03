const form = document.getElementById("form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const eMail = document.getElementById("eMail");
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");
const dayInput = document.getElementById("day");
const address = document.getElementById("address")
const zipCode = document.getElementById("zipCode")





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
    const yearValue = yearInput.value.trim();
    const monthValue = monthInput.value.trim();
    const dayValue = dayInput.value.trim();
    const addressValue = address.value.trim(); 
    const zipCodeValue = zipCode.value.trim();

    if(firstNameValue.length < 2) {
		setErrorFor(firstName, 'Förnamn måste innehålla minst 2 tecken');
	} else {
		setSuccessFor(firstName);
	}
	
    if(lastNameValue.length < 2 ) {
		setErrorFor(lastName, 'Efternamn måste innehålla minst 2 tecken');
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

    if(passwordValue.length < 8) {
		setErrorFor(password, 'Måste innehålla minst åtta tecken');
	} else {
		setSuccessFor(password);
	}
	
	if(confirmPasswordValue.length < 8) {
		setErrorFor(confirmPassword, 'Måste innehålla minst åtta tecken');
	} else if(passwordValue !== confirmPasswordValue) {
		setErrorFor(confirmPassword, 'Matchar inte med lösenord');
	} else{
		setSuccessFor(confirmPassword);
	}

    if(yearValue === '') {
		setErrorFor(yearInput, 'För att registrera sig så måste man vara över 18år.');
	} else {
		setSuccessFor(yearInput);
	}

    if(monthValue === '') {
		setErrorFor(monthInput, 'För att registrera sig så måste man vara över 18år.');
	} else {
		setSuccessFor(monthInput);
	}

    if(dayValue === '') {
		setErrorFor(dayInput, 'För att registrera sig så måste man vara över 18år.');
	} else {
		setSuccessFor(dayInput);
	}

    if(addressValue.length < 2 ) {
		setErrorFor(address, 'Måste ha minst två tecken');
	} else {
		setSuccessFor(address);
	}

    if(zipCodeValue.length == 5 ) {
        setSuccessFor(zipCode);
	} else {
		setErrorFor(zipCode, 'Måste vara fem tecken');
	}


	
	
}

let today = new Date();
let date = today.getDate();
let month = (today.getMonth()+1)
let year = today.getFullYear()

let currentAge
let currentMonth
let fullYear = `${year} ${month} ${date}`

let calcYear = (thisYear, inputYear) => {
        let ageFromYear = thisYear - inputYear

    return ageFromYear
}
console.log(fullYear)

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













