

    createTitle.document.createTitle("Caffe&food and more");

    function validate(){
        var username = document.getElementById('username');
        var password = document.getElementById('password');

        if(username.value.trim() == ""){
            alert('Please fill your username');
            username.focus();
            username.style.borderColor='red';
        
        }else if(password.value.trim() ==""){
                alert('Please fill your password ')
                password.focus();
                password.style.borderColor='red';
        }
        
    }
    function validate2(){
        var username2 = document.getElementById('username2');
        var lastname = document.getElementById('lastname');
        var password = document.getElementById('password');

        if(username2.value.trim() == ""){
            alert('Please fill your name');
           
            username2.style.borderColor='red';
        
        }else if(lastname.value.trim()==""){
            alert('Please fill your last name');
            lastname.focus();
            

        }else if(password.value.trim() ==""){
                alert('Please fill your password')
                password.focus();
                password.style.borderColor='red';
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
    var i=0;
    function ndrysho_Foto() {
        let foto = document.getElementById("slideShow");
            foto.src="inside"+(i++%4)+".jpg";
        
    }
    function slider() {
        setInterval(ndrysho_Foto,160);
        
    }
    document.body.addEventListener('load',slider());
