import Phaser from 'phaser';
import {gameScore} from './SpaceScene'

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }
  
  preload() {
    this.load.image('gameOverBg', '')
  }


  create() {
      this.gameOverText = this.add.text(50, 100, 'Game Over \n Your Score: ' + gameScore.score,  {
      fontSize: '40px', fill: '#fff'
    })
  }

}

export default GameOverScene;