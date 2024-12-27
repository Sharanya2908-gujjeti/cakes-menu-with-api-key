const Firstname=document.getElementById('Firstname');
const lastname=document.getElementById('lastname');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirm=document.getElementById('confirm');
const form=document.getElementById('form');
const Firstname_error=document.getElementById('Firstname_error');
const lastname_error=document.getElementById('lastname_error');
const email_error=document.getElementById('email_error');
const password_error=document.getElementById('password_error');
const confirm_error=document.getElementById('confirm_error');
form.addEventListener('submit',(e)=>{
  //var email_details="sharanya29";
if (Firstname.value==='' ||Firstname.value==='null'){
    e.preventDefault();
    Firstname_error.innerHTML="FirstName is required";}
    else{
       Firstname_error.innerHTML="";
    }
if(email.value===''||email.value==='null'){
    e.preventDefault();
    email_error.innerHTML="please enter your Email";
  }
  else{
    email_error.innerHTML="";
  }
   if(lastname.value==='' ||lastname.value==='null'){
    e.preventDefault();
    lastname_error.innerHTML="LastName  is required";
}
else{
  lastname_error.innerHTML="";
}
   if(password.value.length<=5){
    e.preventDefault();
    password_error.innerHTML="Enter your password";
   } 
   else{
    password_error.innerHTML="";
   }
  })