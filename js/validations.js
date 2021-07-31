let btn = document.getElementById('btn-submit')




btn.addEventListener('click', () => {
    let errors = 0;


    let namefull = document.getElementById('fullName')
    let email = document.getElementById('email')
    let password = document.getElementById('password')
    let checkbox = document.getElementById('checkbox')

    let errorName = document.getElementById('icon-error-fullName')
    let errorEmail = document.getElementById('icon-error-email')
    let errorPassword = document.getElementById('icon-error-password')

    let errorNameText = document.getElementById('error-txt-fullName')
    let errorEmailText = document.getElementById('error-txt-email')
    let errorPasswordText = document.getElementById('error-txt-password')
    let errorCheckboxText = document.getElementById('error-txt-checkbox')

    if(namefull.value == null || namefull.value.length == 0 || /^\s+$/.test(namefull.value)){
        errorName.style.display = 'block';
        errorNameText.style.display = 'block'
        namefull.classList.add('errorInput')
        errors = errors + 1
    }else{
        errorName.style.display = 'none';
        errorNameText.style.display = 'none';
        namefull.classList.remove('errorInput')
        if(errors > 0){
            errors = errors - 1
        }
    }

    valor = email.value
    regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.value == null || email.value.length == 0 || !regex.test(valor)){
        errorEmail.style.display = 'block';
        errorEmailText.style.display = 'block';
        email.classList.add('errorInput')
        errors = errors + 1
    }else{
        errorEmail.style.display = 'none';
        errorEmailText.style.display = 'none';
        email.classList.remove('error-Input')
        if(errors > 0){
            errors = errors - 1
        }
    }

    if(password.value == null || password.value.length <= 8 || /^\s+$/.test(password.value)){
        errorPassword.style.display = 'block';
        errorPasswordText.style.display = 'block';
        password.classList.add('errorInput')
        errors = errors + 1
    }else{
        errorPassword.style.display = 'none';
        errorPasswordText.style.display = 'none';
        password.classList.remove('errorInput')
        if(errors > 0){
            errors = errors - 1
        }
    }

    if(checkbox.checked == false){
        errorCheckboxText.style.display = 'block'
        errors = errors + 1
    }else{
        errorCheckboxText.style.display = 'none'
        if(errors > 0){
            errors = errors - 1
        }
    }


    let form = document.getElementById('form')

    form.addEventListener('submit', function(event){
        if (errors > 0){
            event.preventDefault();
        }
    })
})





let password = document.getElementById('password')

password.addEventListener('keyup', () => {
    let errorPassword = document.getElementById('icon-error-password')

    let errorPasswordText = document.getElementById('error-txt-password')

    if(password.value == null || password.value.length <= 8 || /^\s+$/.test(password.value)){
        errorPassword.style.display = 'block';
        errorPasswordText.style.display = 'block';
        password.classList.add('errorInput')
        password.classList.remove('input-signUp:focus')
    }else{
        errorPassword.style.display = 'none';
        errorPasswordText.style.display = 'none';
        password.classList.remove('errorInput')
        password.classList.add('input-signUp:focus')
    }
})



let namefull = document.getElementById('fullName')

namefull.addEventListener('keyup', () => {
    let errorName = document.getElementById('icon-error-fullName')

    let errorNameText = document.getElementById('error-txt-fullName')

    if(namefull.value == null || namefull.value.length == 0 || /^\s+$/.test(namefull.value)){
        errorName.style.display = 'block';
        errorNameText.style.display = 'block'
        namefull.classList.add('errorInput')
        errors = errors + 1
    }else{
        errorName.style.display = 'none';
        errorNameText.style.display = 'none';
        namefull.classList.remove('errorInput')
        if(errors > 0){
            errors = errors - 1
        }
    }
})



let email = document.getElementById('email')
   
email.addEventListener('keyup', () => {
    let errorEmail = document.getElementById('icon-error-email')

    let errorEmailText = document.getElementById('error-txt-email')
    
    valor = email.value
    regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if(email.value == null || email.value.length == 0 || !regex.test(valor)){
        errorEmail.style.display = 'block';
        errorEmailText.style.display = 'block';
        email.classList.add('errorInput')
        errors = errors + 1
    }else{
        errorEmail.style.display = 'none';
        errorEmailText.style.display = 'none';
        email.classList.remove('errorInput')
        if(errors > 0){
            errors = errors - 1
        }
    }
})