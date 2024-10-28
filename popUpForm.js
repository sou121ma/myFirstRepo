function showSignup(){
    document.querySelector('.overlay').classList.add('showOverlay');
    document.querySelector('.register-form').classList.add('showRegister-form');
}

function showLogIn(){
    document.querySelector('.overlay').classList.add('showOverlay');
    document.querySelector('.login-form').classList.add('showLogIn-form');
}


function closeSignUp(){
    document.querySelector('.overlay').classList.remove('showOverlay');
    document.querySelector('.register-form').classList.remove('showRegister-form');
}
function closeLogIn(){
    document.querySelector('.overlay').classList.remove('showOverlay');
    document.querySelector('.login-form').classList.remove('showLogIn-form');
}

// function closeOverlay(){
//     document.querySelector('.overlay').classList.remove('showOverlay');
//     document.querySelector('.register-form').classList.remove('showRegister-form');
//     document.querySelector('.login-form').classList.remove('showLogIn-form');
// }





var btnSigUp = document.querySelector('.btn-register');//get button from document
btnSigUp.addEventListener("click",showSignup);

var btnLogIn = document.querySelector('.btn-login');
btnLogIn.addEventListener("click",showLogIn);

var close_reg = document.querySelector('.close-reg');
close_reg.addEventListener('click',closeSignUp);

document.querySelector('.close-log').addEventListener('click',closeLogIn);



