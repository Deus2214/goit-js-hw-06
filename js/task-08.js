const form = document.querySelector('.login-form')
const data = {
    email:"",
    password: ""
}
form.addEventListener("submit", validation);

function validation (evt) {
    evt.preventDefault();
    
    const{
elements:{email,password}
} = evt.currentTarget;
if(!email.value || !password.value){
    return alert ("Всі поля повинні бути заповнені!");
}
data.email = email.value;1
data.password = password.value
evt.currentTarget.reset();
return console.log(data)
}
