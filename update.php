<?php
try{
  // connexion base de donnée
  $bdd = new PDO('mysql:host=localhost;dbname=mario;charset=utf8','phpmyadmin','root',array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
}
catch(Exception $e)
{
  die('Erreur : '.$e->getMessage());
}
session_start();
 ?>

<form class="" action="update.php" method="post">
  <input type="text" name="newPseudo" value="">
  <input type="submit" name="" value="Changer votre pseudo">
  <input type="submit" name="delete" value="Supprimer votre compte">
</form>
<a href="Monde.php">Go</a>
<?php
$oldpseudo = $_SESSION['pseudo'];
if (isset($_POST['newPseudo'])) {

$newPseudo = $_POST['newPseudo'];
$req = $bdd->prepare('UPDATE marioUser SET pseudoUser = :pseudo WHERE pseudoUser = :oldpseudo');
$req->execute(array(
  'pseudo' => $newPseudo,
  'oldpseudo' => $oldpseudo
));
$_SESSION['pseudo'] = $newPseudo;
echo "Votre nouveau Pseudo! ".$newPseudo;

// if (isset($_POST['delete'])) {
//   $req = $bdd->prepare('DELETE marioUser SET pseudoUser = :pseudo WHERE pseudoUser = :oldpseudo');
//   $req->execute(array(
//     'pseudo' => $newPseudo,
//     'oldpseudo' => $oldpseudo
//   ));
// }
}
 ?>
