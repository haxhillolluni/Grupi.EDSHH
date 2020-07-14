<?php

    include_once '../controller/perdoruesiController.php';
    if(isset($_Post['submitButtonRegister'])){
        $username =_Post['username'];
         $email =_Post['email'];
          $password =_Post['password'];
           $birthdate =_Post['birthdate'];

           $view =new InsertView();
           $view->insertPerdoruesi($username,$email,$password,$birthdate);

    } 
    class InsertView{
        public function insertPerdoruesi($username,$email,$password,$birthdate){
            $controller = new PerdoruesiController();
            $response=  $controller->InsertPerdoruesi($username,$email,$password,$birthdate);

            if($response){
                ?>
                    <h1>U regjistrua me sukses</h1>
                <?php
            }else{
                 ?>
                    <h1>Nuk U regjistrua me sukses</h1>
                <?php
            }

        }
    }
?>