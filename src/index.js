import Phaser from 'phaser';

import { Laser, LaserGroup,  SpaceScene, } from './scenes/SpaceScene';
import UserInputScene from './scenes/UserInputScene';
import LoadingScene from './scenes/LoadingScene';
import GameOverScene from './scenes/GameOverScene';

const config = {
  type: Phaser.AUTO,
  parent: "game",
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
  scene: [ UserInputScene, LoadingScene, SpaceScene, GameOverScene]
  
};


  const game = new Phaser.Game(config);



