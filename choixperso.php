<?php
try{
  // connexion base de donnée
  $bdd = new PDO('mysql:host=localhost;dbname=mario;charset=utf8','phpmyadmin','root',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
  die('Erreur : '.$e->getMessage());
}
$pseudo = $_POST['pseudo'];

session_start();
$_SESSION['pseudo'] = $_POST['pseudo'];
 ?>
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Choixperso</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="choixperso">
    <a href="Monde.php" class="choix1">
      <div class="perso1">

      </div>
    </a>
    <a href="Monde.php" class="choix2">
      <div class="perso2">

      </div>
    </a>
  </div>
  <script src="js/script.js">

  </script>
</body>
<?php

$req = $bdd->prepare('INSERT INTO marioUser(pseudoUser) VALUES(:pseudo)');
$req->execute(array(
  'pseudo' => $pseudo));
  ?>
</html>
