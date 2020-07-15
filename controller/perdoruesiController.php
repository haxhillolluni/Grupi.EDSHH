<?php
include_once '../models/perdoruesiMapper.php';
include_once '../models/perdoruesiModel.php';
    class PerdoruesiController{
        public function InsertPerdoruesi(){
            //insert Perdoruesi ne database 
            $perdoruesi= new Perdoruesi($username, $email, $password, $birthdate);
            $perdoruesiMapper = new PerdoruesiMapper($perdoruesi);
            $perdoruesiMapper->insert();
            return true;
            

            //insert kursin me e bo lidhjen me njo te caktume 
        }
    }

?>