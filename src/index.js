import Phaser from 'phaser';

import SpaceScene from './scenes/SpaceScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 }
    }
  },
  scene: SpaceScene
};


  const game = new Phaser.Game(config);



