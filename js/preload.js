function preload() {
    game.load.onLoadStart.add(loadStart, this);
    game.load.onFileComplete.add(fileComplete, this);
    game.load.onLoadComplete.add(loadComplete, this);
    loadText = game.add.text(32, 32, '', {
      fill: '#ffffff',
    });
    this.load.path = './assets/images/';
    this.load.image('background', 'background.png');
    //this.load.image('maxxdaddy', 'maxxdaddy.gif');
    this.load.spritesheet('qixfont', 'qix font.png', 32,36);
    this.load.image('player', 'player.png');
    this.load.start();
  
  }
  
  function loadStart() {
    loadText.setText('Loading ...');
  }
  
  function loadComplete() {
    loadText.setText('Load Complete');
    loadText.destroy();
  }
  //	This callback is sent the following parameters:
  function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
  
    loadText.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
  
  
  }