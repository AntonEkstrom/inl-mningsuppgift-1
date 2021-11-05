function validMinValue(value, minValue = 2) {
    if(value.length < minValue)
        return false

    return true
}

function validpostnummer(value) {
    const regEx = /^.{5}$/;
    if(!regEx.test(value))
        return false

    return true
}

function validePost(value) {
    const regEx = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!regEx.test(value))
        return false

    return true
}

function validlösenord(value) {
    const regEx = /^[A-Za-z]\w{8,15}$/;
    if(!regEx.test(value))
        return false

    return true
}



function validConfirmlösenord() {
    if (document.getElementById('contactForm-lösenord').value == document.getElementById('contactForm-confirmlösenord').value) {
        return true

    } else {
        return false
    }
}

function onSubmit(e) {
    e.preventDefault()
}

function checkValidForm(elements) {
    let error = false
    elements.forEach(element => {
        if(element.value === "")
            error = true
        })
        if(error)
            document.getElementById("contactForm-submit").disabled = true
        else
            document.getElementById("contactForm-submit").disabled = false
}

var forms = document.querySelectorAll('.needs-validation')
checkValidForm(forms)


forms.forEach(element => {
    switch(element.id) {
        case "contactForm-förNamn":
        case "contactForm-efterNamn":
        case "contactForm-adress":
        case "contactForm-ort":
            element.addEventListener('keyup', function (e) {
                if(!validMinValue(e.target.value)){ 
                    e.target.classList.add("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;

        case "contactForm-postnummer":
            element.addEventListener('keyup', function (e) {
                if(!validpostnummer(e.target.value)) {
                    e.target.classList.add("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;

        case "contactForm-ePost":
            element.addEventListener('keyup', function (e) {
                if(!validePost(e.target.value)) {
                    e.target.classList.add("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;

        case "contactForm-lösenord":
            element.addEventListener('keyup', function (e) {
                if(!validlösenord(e.target.value)){ 
                    e.target.classList.add("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;

        case "contactForm-confirmlösenord":
            element.addEventListener('keyup', function (e) {
                if(!validConfirmlösenord(e.target.value)){ 
                    e.target.classList.add("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById(`${e.target.id}-error`).style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;

        case "contactForm-födelseDatum":
            element.addEventListener('keyup', function (e) {
                if(validAge(e.target.value)) { 
                    e.target.classList.add("is-invalid")
                    document.getElementById("contactFormfödelseDatumerror").style.display = "block"
                }
                else { 
                    e.target.classList.remove("is-invalid")
                    document.getElementById("contactFormfödelseDatumerror").style.display = "none"
                    checkValidForm(forms)
                }
            })
        break;

    }
})


function validAge(birth) {
    var today = new Date();
    var todayyear = today.getFullYear();
    var todaymonth = today.getMonth();
    var todayday = today.getDate();
    var b = document.getElementById('contactForm-födelseDatum').value;
    var birth = new Date(b);
    var birthyear = birth.getFullYear();
    var birthmonth = birth.getMonth();
    var födelseDatum = birth.getDate();
    var age = todayyear - birthyear;
    var age_month = todaymonth - birthmonth;
    var age_day = todayday - födelseDatum;



    if (age_month < 0 || (age_month == 0 && age_day < 0)) {
        age = parseInt(age) - 1;
        
        return true
    }
    if ((age == 18 && age_month <= 0 && age_day <= 0) || age < 18){
        return true;
    }
}