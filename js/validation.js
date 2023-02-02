const message=document.querySelector('#error-message');
const submit=document.querySelector('.button-contactform');
const validation=/^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
const text=document.querySelector('.email');

submit.addEventListener('click',check());

function check (){
    document.forms[0].onsubmit=function email(e) {
        if(!(validation.test(text))) {
            message.innerHTML='Please enter your email in lowercase!';
            message.style.visibility='visible';
            message.style.color='white';
            message.style.background='red';
            message.style.textAlign='center';
            e.preventDefault();
        }
    };
}