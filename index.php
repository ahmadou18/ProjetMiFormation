<?php
try{
  // connexion base de donnée
  $bdd = new PDO('mysql:host=localhost;dbname=mario;charset=utf8','phpmyadmin','root',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
  die('Erreur : '.$e->getMessage());
}
$reqNbUser = $bdd->query('SELECT COUNT(idUser)as total from marioUser');
$NbUser = $reqNbUser->fetch();
$Nb = $NbUser['total'];
 ?>


  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <title>Jeu</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <div class="accueil">
      <p>
      <?php
      echo "Il y a ". $Nb . " utilisateurs inscrits !";
       ?>
     </p>
      <form class="" action="choixperso.php" method="post">
        <input type="text" name="pseudo" value="" placeholder="Rentrez votre pseudo" required>
        <input type="submit" name="" value="PLAY">
      </form>
    </div>
  </body>
  </html>
