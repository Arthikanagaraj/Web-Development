const email = document.getElementById("email");
const password = document.getElementById("password"); 
const form = document.getElementById("form");
const msg = document.getElementById("msg");
const validateEmail = (inputEmail)=> inputEmail.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const validatePassword = (inputPassword) => inputPassword.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
const generateError = (errorName, errorMsg) =>{
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    if(errorName == "email"){
        emailError.innerText = errorMsg;    
    }else if(errorName == "password"){
        passwordError.innerText = errorMsg;
    }
}
const formValidate = (inputEmail, inputPassword) =>{
    if(!validateEmail(inputEmail)){
        emailError = "please enter a valid email address";
        generateError("email",emailError);
        return;
    }
    if(!validatePassword(inputPassword)){
        passwordError = "please enter correct password";
        generateError(generateError("password",passwordError));
        return;
    }
  
}
form.addEventListener("submit",(e) => {
    e.preventDefault();
    formValidate(email, password);
});
email.addEventListener("focusout", (e)=>{
    if(!validateEmail(email)){
        email.style.borderColor = "red";
        generateError("email", "Please enter a valid email");
        email.parentElement.classList.add("error");
    }
});
password.addEventListener("focusout", (e)=>{
    if(!validatePassword(password)){
        password.style.borderColor = "red";
        generateError("password", "Please enter a valid password");
        password.parentElement.classList.add("error");
    }
});