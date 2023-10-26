
// getElementById
const container = document.getElementById('container')
const form = document.getElementById('form')
const firstName = document.getElementById('firstname')
const lastName = document.getElementById('lastName')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirmPassword')
const age = document.getElementById('age')
const ismaried = document.getElementById('ismaried')
const btn = document.getElementById('btn')
const table = document.getElementById('table')

//regex
const regex = /^[a-zA-ZəƏŞşÇçÖöğıüÜğ ,.'-]+$/;

btn.addEventListener('click',(event)=>{
    event.preventDefault()

    const firstNameValue = firstName.value
    const lastNameValue = lastName.value
    const passwordValue = password.value
    // const confirmPasswordValue = confirmPassword.value
    const ageValue = age.value 
    const isMarriedValue = ismaried.checked ? "Evli" : "Bekar";


    const user = document.createElement('tr')
    const firstNameTd = document.createElement('td')
    const lastNameTd = document.createElement('td')
    const passwordTd = document.createElement('td')
    const confirmPasswordTd = document.createElement('td')
    const ageTd = document.createElement('td')
    const ismariedTd = document.createElement('td')


    //sertler
    if (firstName.value.trim() === '' || lastName.value.trim === ''  ) {
        alert("inputlari tam doldurun")
        return -1
    }
    else{
        user.appendChild(firstNameTd)
        user.appendChild(lastNameTd)
    }

    if (!regex.test(firstName.value || !regex.test(lastName.value))) {
        alert("herflerden ibaret olmalidi")
        return 
    }

    if (age.value=== '' || age.value<0) {
        alert("yasi duz yaz")
        return -1
    }
    else{
        user.appendChild(ageTd)
    }

    if (ismaried.checked) {
        user.appendChild(ismariedTd);
    }
    if ((password.value !== confirmPassword.value)) {
        alert('kodu duzgun daxil edin')
        return -1
    }
    else{
        
        user.appendChild(passwordTd)
    }


    table.appendChild(user)

    //textcontent
    firstNameTd.textContent = firstNameValue;
    lastNameTd.textContent = lastNameValue;
    ageTd.textContent = ageValue;
    ismariedTd.textContent = isMarriedValue;
    passwordTd.textContent = passwordValue
    confirmPasswordTd.textContent = confirmPassword


    firstName.value = ''
    lastName.value = ''
    age.value = ''
    ismaried.checked = false;
})