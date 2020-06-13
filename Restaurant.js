
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
    var firstname_error = document.form.firstname.value;
    var lastname_error= document.form.lastname.value;
    var email_error = document.form.email.value;
    var password_error = document.form.password.value;
    var birthdate_error = document.form.birthdate.value;
   
    var regexName = /^[A-Za-z]{3,20}$/;
    var regexEmail = /^\w+@[a-zA-Z0-9]+?.[a-zA-Z0-9]{2,3}$/;
    var regexPassword =  new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var regexBirthdate =/^((19|20)\d\d[- /.] (0[1-9]|1[012])[- /.] (0[1-9]|[12][0-9]|3[01])| (19|20)\d\d[. /.] (0[1-9]|1[012])[. /.] (0[1-9]|[12][0-9]|3[01])|(19|20)\d\d[//.] (0[1-9]|1[012])[//.] (0[1-9]|[12][0-9]|3[01]))$/;


    if(firstname_error == null || firstname_error== ""){
        alert('please fill your first name');
        firstname_error.focus();
        firstname_error.style.borderColor='red';
        return false;
    }if(!(regexName.test(firstname_error))){
        alert('the first name must have at least three characters');
        firstname_error.focus();
        firstname_error.style.borderColor='red';
        return false;

    }



    if(lastname_error == null || lastname_error ==""){
        alert('please fill your username');
        lastname_error.style.borderColor='red';
        lastname_error.focus();
        return false;

    }
    if(!(regexName.test(lastname_error))){
        alert('the last name must have at least three characters');
        lastname_error.focus();
        lastname_error.style.borderColor='red';
        return false;

    }


    if(email_error == null || email_error ==""){
        alert('please fill your email');
        email_error.focus();
        email_error.style.borderColor='red';
        return false;
    }if(!(regexEmail.test(email_error))){
        alert('your email is not valide');
        email_error.focus();
        email_error.style.borderColor='red';
        return false;
    }


    if(password_error == null || password_error ==""){
        alert('please fill your password ');
        password_error.focus();
        password_error.style.borderColor='red';
        return false;
    }if(!(regexPassword.test(password_error))){
        alert('password must have 1 or more lowercase, uppercase alphabetic char, number and symbol. length>=8');
        password_error.focus();
        password_error.style.borderColor='red';
        return false;
    }
    if(birthdate_error == null || birthdate_error ==""){
        alert('please fill your birthday date');
        birthdate_error.focus();
        birthdate_error.style.borderColor='red';
        return false;
    }if(!(regexBirthdate.test(birthdate_error))){
        alert('Birthday date must be yyyy-mm-dd or yyyy.mm.dd  or yyyy/mm/dd');
        birthdate_error.focus();
        birthdate_error.style.borderColor='red';
        return false;
        
    }
    else {return true;}


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

