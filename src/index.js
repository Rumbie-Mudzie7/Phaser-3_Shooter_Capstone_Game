import Phaser from 'phaser';

import { Laser, LaserGroup,  SpaceScene, } from './scenes/SpaceScene';
import LoadingScene from './scenes/LoadingScene';
import GameOverScene from './scenes/GameOverScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  dom: {
    createContainer: true
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 },
      enableBody: true
    }
  },
  scene: [ LoadingScene, SpaceScene, GameOverScene]
  
};


  const game = new Phaser.Game(config);



