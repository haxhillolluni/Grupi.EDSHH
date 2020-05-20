

    createTitle.document.createTitle("Caffe&food and more");

    function validate(){
        var username = document.getElementById('username');
        var password = document.getElementById('password');

        if(username.value.trim() ==""  ){
            alert('Please fill your username');
            username.focus();
        
        }else if(password.value.trim() =="" ){
                alert('Please fill your password ')
                password.focus();
        }
        
    }
    