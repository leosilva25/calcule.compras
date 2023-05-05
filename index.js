let email = document.getElementById('email');
let password = document.getElementById('password');
let form = document.querySelector('form');
let textForm = document.getElementById('small');
let textEmail = document.getElementById('textEmail');
let textPassword = document.getElementById('textPassword');





form.addEventListener('submit' , (e)=>{
    if(email.value=='' && password.value == ''){
       alert('Você precisa preencher todos os campos');
     } 
    else if(email.value==''){
        alert('Você precisa preencher todos os campos');
    } else if (password.value == ''){
        alert('Você precisa preencher todos os campos');
    } else{
        window.location.href = "calculadora.html"
    };
   
    e.preventDefault();
});


email.addEventListener('keyup', ()=>{
    document.querySelector('.email').style.color = 'White'
    if(validatorEmail(email.value) !==true){
        textEmail.textContent = 'O formato do email deve ser: Exemplo: name@abc.com';
    } else {
        textEmail.textContent = ''
    }
});


password.addEventListener('keyup' , ()=>{
    document.querySelector('.password').style.color = 'White'
    document.querySelector('.password').style.display = 'flex'
    document.querySelector('.password').style.flexdirection = 'column'
    document.querySelector('.password').style.textAlign = 'center'
    if(validatorPassword(password.value) !==true){
        textPassword.textContent ='A senha deve conter um @, #, %, $, uma letra maiúscula, uma letra minúscula  e um  número !';
    } else{
        textPassword.textContent= '';
    }
});

function validatorEmail(email){
    let emailPatern =   /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
    return emailPatern.test(email);
};


function validatorPassword(password){
    let passwordPatern =   /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return passwordPatern.test(password);
};

