function myFunction(){
    var post = {
        s : '',
        p : '' 
    };
    s = document.getElementsByName('fname')[0].value;
    p = document.getElementsByName('fname')[1].value;

    var img = document.createElement('img');
    img.src = s;
    img.className += "logo";
    var createdP = document.createElement('p');
    createdP.className += "para";
    createdP.innerHTML = p;
    var createdli = document.createElement('li');
    createdli.className += "solid";
    createdli.appendChild(img);
    createdli.appendChild(createdP);
    var x = document.getElementsByClassName('main');
    var y = x[x.length - 1];
    listElements = y.getElementsByTagName('li');
    var len = listElements.length;
    if(len < 4){
        y.appendChild(createdli);
    }else{
        var createdUl = document.createElement('ul');
        createdUl.className += "main";
        document.getElementsByClassName('show')[0].appendChild(createdUl);
        createdUl.appendChild(createdli);
    }
}