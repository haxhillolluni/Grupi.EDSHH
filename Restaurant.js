

    createTitle.document.createTitle("Caffe&food and more");

    function validate(){
        var username = document.getElementById('username');
        var password = document.getElementById('password');

        if(username.value.trim() == ""){
            alert('Please fill your username');
            username.focus();
        
        }else if(password.value.trim() ==""){
                alert('Please fill your password ')
                password.focus();
        }
        
    }
    function send() {
        var yourName = document.getElementById('yourName');
        var yourEmail=document.getElementById('yourEmail');
        var subject = document.getElementById('subject');
        var yourMessage=document.getElementById('yourMessage');

        if(yourName.value.trim()== ""){
            alert('Please fill your name');
            yourName.focus();
            
        }else if(yourEmail.value.trim()== ""){
            alert('Please fill your email');
            yourEmail.focus();

        }else if(subject.value.trim()== ""){
            alert('Please fill your subject');
            subject.focus();

        }else if(yourMessage.value.trim()== ""){
            alert('Please fill your message');
            yourMessage.focus();
        }
        location.reload();
        
    }