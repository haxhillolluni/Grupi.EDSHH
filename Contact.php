<!doctype html>
<html>
    <head>
        <title>Contact US</title>
        <link href="Restaurant.css" rel="stylesheet" type="text/css" /></title>
        <script src="Restaurant.js"></script>
 
         
        <div class="container" style="height: 60px;">
            <a href="Index.php">
            <img src="logo.jpg" alt="Index.php" style="padding-left: 20px;" width="55px" height="55px" />
            </a>
            
            <div id="list">
                <ul>
                    <li class="lista"><a href="Index.php">Home</a> </li>
                    <li class="lista"><a href="About_US.php">About Us</a> </li>
                    <li class="lista"><a href="Contact.php">Contact</a></li> 
                    <li class="lista"><a href="Historiku.php">Historiku</a></li> 
                </ul>
               
            </div>
         </div>
    </head>
    <body style="background-color:whitesmoke;">
        <div id="CONTACT">
            <div id="contactUS">
                <p>
                    <h2>Contact US</h2>
                    We're happy to answer to any questions you have or provide you with an estimate. Just send us a message in the<br>
                    form below with any questions you may have.
                </p>
                
                <form>
                    <h5><label for=""><b>YOUR NAME (required)</b></label><br>
                    <input type="text" placeholder="" name="" id="yourName" style="width: 300px; height: 20px;"/><br></h5>

                    <h5><label for=""><b>YOUR EMAIL (required)</b></label><br>
                    <input type="text" placeholder="" name="" id="yourEmail"style="width: 300px; height: 20px;"/><br></h5>

                    <h5><label for=""><b>SUBJECT</b></label><br>
                    <input type="text" placeholder="" name="" id="subject"style="width: 300px; height: 20px;"/><br></h5>

                    <h5><label for=""><b>Your MESSAGE</b></label><br>
                    <textarea type="text" placeholder="" name="" id="yourMessage"style="width: 300px; height: 120px;"></textarea><br></h5>

                    <button value="SEND" id="send"  style="background-color:rgb(19, 126, 197); color:white" onclick="send()" >SEND</button>
                </form>
            </div>
            <div id="contactUS2">
                <h5 style="color: red;">EMAIL</h5>
                caffe&foodandmore@gmail.com<br>
                <hr>

                <h5 style="color: red;">PHONE</h5>
                124.543.53201<br>
                0124.421.3441
                <hr>
                <h5 style="color: red;">SOCIAL MEDIA</h5>
                Instagram: caffe&food_and_more<br>
                Facebook:  caffe&food_and_more
                <hr>
            </div>
            
        </div>
    </body>
</html>