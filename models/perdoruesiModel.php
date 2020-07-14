<?php
    class Perdoruesi{
        private $PerdoruesiID;
        private $username;
        private $email;
        private $password;
        private $birthdate;

        public function __construct($username,$email,$password,$birthdate){
            $this->username=$username;
            $this->email=$email;
            $this->password=$password;
            $this->birthdate=$birthdate;
        }

        public function getUsername(){
            return $this->username;
        }
        public function getEmail(){
            return $this->email;
        }
        public function getPassword(){
            return $this->password;
        }
        public function getBirthdate(){
            return $this->birthdate;
        }

        public function setUsername($username){
            $this->username=$username;
        }
        public function setEmail($email){
            $this->email=$email;
        }
        
    }
?>