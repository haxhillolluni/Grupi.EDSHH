
function registerForm(){
    document.getElementById("formatBox2").style.display="block";
    document.getElementById("formatBox1").style.display="none";
}

function loginForm(){
    document.getElementById("formatBox1").style.display="block";
    document.getElementById("formatBox2").style.display="none";
}


function validate() {
    var username = document.getElementById('username');
    var password = document.getElementById('password');

    if (username.value.trim() == "") {
        alert('Please fill your username');
        username.focus();
        username.style.borderColor = 'red';
        return false;

    } else if (password.value.trim() == "") {
        alert('Please fill your password ');
        password.focus();
        password.style.borderColor = 'red';
        return false;
    }
    else{
        return true;
    }

}


//validimi Register///////////////////////////////////////

function validate2(){
    var username_error = document.form.username.value;
    var email_error = document.form.email.value;
    var password_error = document.form.password.value;
    var birthdate_error = document.form.birthdate.value;
   
    var regexUsername = /^(([A-Za-z]{3,20}\d[A-Za-z]{3,20})||([A-Za-z]{3,20}\d[A-Za-z]{3,20}\d[A-Za-z]{3,20}||([A-Za-z]{3,20}))){3,20}$/;
    var regexEmail = /^\w+@[a-zA-Z0-9]+?.[a-zA-Z0-9]{2,3}$/;
    var regexPassword =  new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var regexBirthdate =/^((19|20)\d\d[- /.] (0[1-9]|1[012])[- /.] (0[1-9]|[12][0-9]|3[01])| (19|20)\d\d[. /.] (0[1-9]|1[012])[. /.] (0[1-9]|[12][0-9]|3[01])|(19|20)\d\d[//.] (0[1-9]|1[012])[//.] (0[1-9]|[12][0-9]|3[01]))$/;

    

    if(username_error == null || username_error===""){
        document.getElementById('message').innerHTML='<h5>Please fill your username</h5>';
        username_error.focus();
    
        return false;
    }
    else if(!(regexUsername.test(username_error))){
        document.getElementById('message').innerHTML='<h5>Your username is not valide</h5>';
        username_error.focus();
        return false;
    }

    

    else if(email_error == null || email_error ===""){
        document.getElementById('message').innerHTML='<h5>Please fill your email</h5>';
        email_error.focus();
        return false;
    }else if(!(regexEmail.test(email_error))){
        document.getElementById('message').innerHTML='<h5>Your email is not valide</h5>';
         email_error.focus();
        return false;
    }


    else  if(password_error == null || password_error ===""){
        document.getElementById('message').innerHTML='<h5>Please fill your password</h5>';
        password_error.focus();
        return false;
    }else if(!(regexPassword.test(password_error))){
        document.getElementById('message').innerHTML='<h5>Your password is not valide</h5>';
        password_error.focus();
        return false;
    }
    else if(birthdate_error == null || birthdate_error ===""){
        document.getElementById('message').innerHTML='<h5>Please fill your birthday date</h5>';
        birthdate_error.focus();
        return false;
    }else if(!(regexBirthdate.test(birthdate_error))){
        document.getElementById('message').innerHTML='<h5>Your birthday date is not valide</h5>';
        birthdate_error.focus();
        return false;
        
    }
    else {
        document.getElementById('messagestrue').innerHTML='<h5>Your birthday date is not valide</h5>';
        return true;
    }
     


}
//validimi register /////////////////////////////////////////////////


function send() {
    var yourName = document.getElementById('yourName');
    var yourEmail = document.getElementById('yourEmail');
    var subject = document.getElementById('subject');
    var yourMessage = document.getElementById('yourMessage');

    if (yourName.value.trim() == "") {
        alert('Please fill your name');
        yourName.focus();
        yourName.style.borderColor="Red";
        return false;

    } else if (yourEmail.value.trim() == "") {
        alert('Please fill your email');
        yourEmail.focus();
        return false;

    } else if (subject.value.trim() == "") {
        alert('Please fill your subject');
        subject.focus();
        return false;

    } else if (yourMessage.value.trim() == "") {
        alert('Please fill your message');
        yourMessage.focus();
        return false;
    }
    else{
       
        location.reload();
        return true;
    }
    

}
