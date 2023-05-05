let nome = document.querySelector('.nome');
let email = document.querySelector('.email');
let password = document.getElementById('password');
let confirmPassword = document.querySelector('.confirmPassword');
let form = document.querySelector('form');
let textEmail = document.getElementById('textEmail');
let textPassword = document.getElementById('textPassword');
let textConfirm = document.querySelector('.textConfirm');

form.addEventListener('submit', (e)=>{
    if(nome.value == ''){
        alert('Você precisa preencher todos os campos');
    } else if (email.value == ''){
        alert('Você precisa preencher todos os campos');
    } else if (password.value == ''){
        alert('Você precisa preencher todos os campos');
    } else if(confirmPassword.value == ''){
        alert('Você precisa preencher todos os campos');
    } else if ( confirmPassword.value !== password.value){  
      alert('As senhas não correspondem');
    } else if (confirmPassword.value == password.value ){
        window.location.href = "calculadora.html"
    }

   
   
    e.preventDefault()
});

   

    email.addEventListener('keyup', ()=>{
        document.querySelector('.textEmail').style.color = "White";
        if(validadorEmail(email.value) !== true){
            textEmail.textContent = 'O formato do email deve ser: Exemplo: name@abc.com';
        } else {
            textEmail.textContent= ''
        }
    });


    password.addEventListener('keyup', ()=>{
        document.querySelector('.textPassword').style.color = "White";
        if(validatorPassword(password.value) !==true){
            textPassword.textContent = 'A senha deve conter um @, #, %, $, uma letra maiúscula, uma letra minúscula  e um  número e no mínimo 6 dígitos';
        } else {
            textPassword.textContent = ''
        }
    });

    

    function validadorEmail(email){
        let emailPatern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        return emailPatern.test(email);
    };

    function validatorPassword(password){
        let passwordPatern =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        return passwordPatern.test(password);
    };


   