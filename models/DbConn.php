<?php
    class DBConnection{
        private $servername='DESKTOP-N2AMSK1';
        private $user='DesktopUser';
        private $password='12345678';
        private $databaseName='Restauranti';

        public function getConnection(){
            try{
                $connection=new PDO("sqlsrv:Server=$this->servername;Database=$this->databaseName",$this->user,$this->password);

                $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            }catch(PDOException $e){
                 echo $e->getMessage();
                 return null;

            }
                return $connection;
            
        }
    }
?>