var game = new Phaser.Game(1200, 650, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
  game.load.spritesheet('mario', 'image/dude.png', 32, 48);
  game.load.image('sky','image/backgrd4.png');
  game.load.image('pipe','image/tube2.png');
  game.load.image('coin', 'image/diamond.png');
}

var player;
var platforms;
var coin;
var coins;
var score = 0;
var scoreText;
var highscore = sessionStorage.getItem("highscore");
var stateText;
function create() {

  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.tileSprite(0, 0, 9000, 950, 'sky');

  // platforms = game.add.group();
  // platforms.enableBody = true;
  // var tuyau = platforms.create(400, 350,'pipe');
  // tuyau.body.immovable = true;
  // tuyau = platforms.create(600, 500, 'pipe');
  // tuyau.body.immovable = true;

  game.world.setBounds(0, 0, 9000, 650);
  player = game.add.sprite(32, game.world.height - 400, 'mario');

  game.physics.arcade.enable(player);
  player.body.gravity.y = 1200;
  player.body.collideWorldBounds = true;
  cursors = game.input.keyboard.createCursorKeys();
  game.camera.follow(player);



  // var coin = game.add.sprite(400,200, 'coin');
  // var tourne = coin.animations.add('tourne');
  // coin.animations.play('tourne',30,true);

  coins = game.add.group();
  coins.enableBody = true;
  for (var i = 2; i < 22; i++)
  {
    let hauteur = Math.random()*550;
    var coin = coins.create(i * 300, hauteur, 'coin');
    coin.checkWorldBounds = true;
    coin.events.onOutOfBounds.add(coinOut, this);
    // var tourne = coin.animations.add('tourne');
    // coin.animations.play('tourne',30,true);
  }
  scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000'});
  highscoreText = game.add.text(200, 16, 'Highscore:'+ highscore, { fontSize: '32px', fill: '#000'});
  // stateText = game.add.text(600,350,'', { font: '84px Arial', fill: '#fff' });
  // stateText.anchor.setTo(0.5, 0.5);
  // stateText.visible = false;
  // stateText.fixedToCamera = true;
  scoreText.fixedToCamera = true;
  highscoreText.fixedToCamera = true;
}
function coinOut(coin){
  player.kill();
  // stateText.text="GAME OVER \n CLICK TO RESTART";
  // stateText.visible = true;
  game.input.onTap.addOnce(restart,this);
  if (score > highscore) {
    sessionStorage.setItem("highscore",score);
  }
}
function update() {

  player.body.velocity.x = 250;
  game.physics.arcade.collide(player, platforms);
  game.physics.arcade.overlap(player, coins, collectCoin, null, this);
  if (cursors.up.isDown)
  {
    player.body.velocity.y = -300;
  }

}

function collectCoin (player, coin) {
  // Kill la pièce
  coin.kill();

  //  Update le score
  score += 10;
  scoreText.text = 'Score: ' + score;
  if (coins.total === 0) {
    alert("Bravo, votre score est de " + score);
    sessionStorage.setItem("highscore",score);
  }
  // else if (coins.outOfBounds === true) {
  //   alert("perdu");
  // }
}

function restart(pointer){
  player.revive();

  coin.callAll('revive');
  // stateText.visible = false;
}
