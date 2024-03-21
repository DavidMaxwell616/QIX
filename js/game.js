var game = new Phaser.Game(800, 600,
   Phaser.AUTO, 'phaser-example',
   { preload: preload, create: create, update: update });

function create() {
   game.physics.startSystem(Phaser.Physics.ARCADE);

   var background = game.add.image(0, 0, 'background');
   background.width = game.width;
   background.height = game.height;
   player = game.add.sprite(game.width / 2, GAME_BOTTOM, 'player');
   keyUp = game.input.keyboard.addKey(KEYCODE_UP);
   keyUp.onDown.add(MoveUp, this);
   keyUp.onUp.add(StopMove, this);
   keyDown = game.input.keyboard.addKey(KEYCODE_DOWN);
   keyDown.onDown.add(MoveDown, this);
   keyDown.onUp.add(StopMove, this);
   keyRight = game.input.keyboard.addKey(KEYCODE_RIGHT);
   keyRight.onDown.add(MoveRight, this);
   keyRight.onUp.add(StopMove, this);
   keyLeft = game.input.keyboard.addKey(KEYCODE_LEFT);
   keyLeft.onDown.add(MoveLeft, this);
   keyLeft.onUp.add(StopMove, this);
   player.xv = player.yv = 0;
   startGame = true;
   textTiles = game.add.group();
   textTiles.createMultiple(150, 'qixfont');
   textTiles.callAll('anchor.setTo', 'anchor', 0.5, 0.5);
    drawText(40,140,"COPYRIGHT 1981 BY");
   drawText(40,180,"TAITO AMERICA CORP");
}

function drawText(x, y, str) {
   let newX = x;
   const text = str.toUpperCase();
   for (let i = 0; i < text.length; i++) {
     const code = text.charAt(i);
     const frame = textFrames[code];
     const letter = textTiles.children[i];
      console.log(letter);
     if (typeof frame !== 'undefined') {
       letter.x = newX;
       letter.y = y;
       letter.alive = true;
       letter.visible = true;
       letter.frame = frame;
       newX += 38;
     } else {
       newX += 20;
     }
   }
 }
 function StopMove() {
   player.xv = 0;
   player.yv = 0;
};

function MoveUp() {
   player.yv = -speed;
   player.xv = 0;
};

function MoveDown() {
   player.yv = speed;
   player.xv = 0;
};

function MoveRight() {
   player.xv = speed;
   player.yv = 0;
};

function MoveLeft() {
   player.xv = -speed;
   player.yv = 0;
};


function update() {
   if (!startGame || gameOver)
      return;
   if (player.x > GAME_LEFT-2 && player.x < GAME_RIGHT+2)
      player.x += player.xv;
   if (player.y > GAME_TOP-2 && player.y < GAME_BOTTOM+2)
      player.y += player.yv;

}; 