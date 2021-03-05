import Phaser from 'phaser';
import {gameScore} from './SpaceScene'

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }
  
  preload() {
    this.load.image('gameOverBg', '/assets/images/gameoverbg.png');
  }


  create() {
      let gameOverBackground = this.add.image(0, 0, 'gameOverBg').setOrigin(0, 0);
      this.gameOverText = this.add.text(200, 300, 'Game Over \n Your Score: ' + gameScore.score,  {
      fontSize: '40px', fill: '#fff'
    })
    gameScore.score = 0;
  }

}

export default GameOverScene;