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
const submit = document.getElementById("submit");
const SubmitError = document.getElementById("sendBtn-error")
const errorElement = document.getElementById('error')



 form.addEventListener('submit', (e) => {
     e.preventDefault();
     
     checkInputs();
 })

 function checkInputs(){
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const eMailValue = eMail.value.trim();
    const passwordValue = password.value.trim(); 
    const conValue = .value.trim(); 
    const Value = .value.trim(); 
    const Value = .value.trim(); 
    const Value = .value.trim(); 
    const Value = .value.trim(); 
    const Value = .value.trim(); 
    const Value = .value.trim(); 

 }