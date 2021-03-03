import Phaser from 'phaser';

import { Laser, LaserGroup,  SpaceScene, } from './scenes/SpaceScene';
import LoadingScene from './scenes/LoadingScene';

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
  scene: [ LoadingScene, SpaceScene ]
  
};


  const game = new Phaser.Game(config);



