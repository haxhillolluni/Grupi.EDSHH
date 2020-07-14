<?php
include_once 'DbConn.php';
include_once 'perdoruesiModel.php';
 class PerdoruesiMapper{
     private $perdoruesi;
     private $connection;


     public function __construct($perdoruesi){
         $obj= new DBConnesction();
         $this->connection=$obj->getConnection();
         $this->perdoruesi=$perdoruesi;
     }
     
     public function Insert(){
         $sql="INSERT INTO Perdoruesi (username, email,password, birthdate) values (:username,:email,:password,:birthdate)";

        $statement = $this->connection->prepare($sql); 

        $statement->bindParam(":username",$this->perdoruesi->getUsername());
         $statement->bindParam(":email",$this->perdoruesi->getEmail());
          $statement->bindParam(":password",$this->perdoruesi->getPassword());
           $statement->bindParam(":birthdate",$this->perdoruesi->getBirthdate());

           $statement->execute();
     }
 }
?>