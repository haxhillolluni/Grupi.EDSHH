<!DOCTYPE html>
<html lang="en">
<head>
    <head>
        <title>Ushqimet</title>
        <link href="css/food.css" rel="stylesheet" type="text/css" /></title>
        <div class="container" style="height: 60px;">
            <a href="Restaurant.php">
            <img src="logo.jpg" alt="Restaurant.php" style="padding-left: 20px;" width="55px" height="55px" />
            </a>
            
            <div id="list">
                <ul>
                    <li class="lista"><a href="Restaurant.php">Home</a> </li>
                    <li class="lista"><a href="ushqimet.php">Ushqimet</a></li>
                    <li class="lista"><a href="About_US.php">About Us</a> </li>
                    <li class="lista"><a href="Contact.php">Contact</a></li>
                    
                    <li class="lista"><a href="Historiku.php">Historiku</a></li>
                </ul>
            </div>
         </div>
    </head>
<body>
    <div class = 'header'>
        <h1>Full Menu</h1>
    </div>

    <div class  = "show">
        <ul class = 'main'>
            <li class="solid">
                <img class="logo" src="436145260z.jpg" alt = 'biftek'></img>
                <p class = "para">biftek</p>
            </li>
            <li class="solid">
                <img class="logo" src="lunch-dinner_soups-salads_crispy-chicken-salad.jpg" alt = 'sallate pule'></img>
                <p class = "para">sallate pule</p>
            </li>
            <li class="solid">
                <img class ="logo" src="Feature-restaurant-butcher-bakery-shops2.jpg" alt = 'sandwich'></img>
                <p class = "para">sandwich</p>
            </li>
            <li class="solid">
                <img class ="logo" src="Pizza-Margarita.png" alt = 'pice margarita'></img>
                <p class = "para">pica margarita</p>
            </li>
        </ul>
        <ul class = 'main'>
            <li class="solid">
                <img class="logo" src="fasule-1200x630.jpg" alt = 'pasul ne tave'></img>
                <p class = "para">pasul ne tave</p>
            </li>
            <li class="solid">
                <img class="logo" src="hqdefault.jpg" alt = 'gullash me mish viqi'></img>
                <p class = "para">gullash me mish viqi</p>
            </li>
            <li class="solid">
                <img class="logo" src="download.jpg" alt = 'qofte ne tave'></img>
                <p class = "para">qofte ne tave</p>
            </li>
            <li class="solid">
                <img class="logo" src="omeelperi-780x439.jpg" alt = 'omlet me proshute'></img>
                <p class = "para">omlet me proshute</p>
            </li>
        </ul>
        <ul class = 'main'>
            <li class="solid">
                <img class="logo" src="download (1).jpg" alt = 'filete pule'></img>
                <p class="para">filete pule</p>
            </li>
            <li class="solid">
                <img class="logo" src="featured-great-american-hamburger.jpg" alt = 'hamburger'></img>
                <p class = "para">hamburger</p>
            </li>
            <li class="solid">
                <img class="logo" src="hqdefault (1).jpg" alt = 'doner'></img>
                <p class = "para">doner</p>
            </li>
            <li class="solid">
                <img class="logo" src="download (2).jpg" alt = 'qebapa'></img>
                <p class = "para">qebapa</p>
            </li>
        </ul>
    </div>
    <?php
        $serverName = 'DESKTOP-J435FOV';
        $connectionInfo = array( "Database"=>"Webi", "UID"=>"DesktopUser", "PWD"=>"12345678");
        $conn = sqlsrv_connect( $serverName, $connectionInfo );
        if( $conn === false ) {
            die( print_r( sqlsrv_errors(), true));
        }
       
        $sql = "SELECT * FROM Post";
        $stmt = sqlsrv_query( $conn, $sql );
        if( $stmt === false) {
            die( print_r( sqlsrv_errors(), true) );
       }
       
        $vlera = 0;
        while( $row = sqlsrv_fetch_array( $stmt, SQLSRV_FETCH_NUMERIC) ) {      
            if($vlera == 4 || $vlera == 0){
                $vlera = 0;
    ?>
                <ul class=" main">
    <?php
            }
            ?>   
                <li class="solid">
                    <img class="logo" src="<?php echo $row[1];?>" alt = 'filete pule'></img>
                    <p class = "para">filete pule</p>
                </li>            
            <?php
            if($vlera == 3){
            ?>
                </ul>
            <?php
            }
                $vlera++;
            
        }
        
        sqlsrv_free_stmt( $stmt);
    ?>

   <form  action = "views/insertPosts.php" method = "post">
        <input name = "fname" id = "myinput" type=" text" value = ''>
        <input name = "fname1" id = "myinput" type=" text" value="">
        <input type = 'submit'  value = "Post" submit="false" name="Submitbtn">
    </form>
    <script>
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
    </script>
</body>
</html>