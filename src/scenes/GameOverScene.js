import Phaser from 'phaser';
import { gameScore } from './UserInputScene';

class GameOverScene extends Phaser.Scene {
  constructor() {
    super('GameOverScene');
  }

  create() {
    this.add.image(0, 0, 'gameOverBg').setOrigin(0, 0);
    this.gameOverText = this.add.text(
      200,
      300,
      `Game Over ${gameScore.playerName} \n Your Score: ${gameScore.score}`,
      {
        fontSize: '40px',
        fill: '#fff',
      },
    );

    gameScore.score = 0;

    this.add
      .text(
        this.scale.width * 0.5,
        this.scale.height * 0.8,
        'Press enter to go back to the Menu.',

      )
      .setOrigin();

    this.add
      .text(
        this.scale.width * 0.5,
        this.scale.height * 0.9,
        'Press space to restart game.',

      )
      .setOrigin();

    this.input.keyboard.once('keydown-ENTER', () => {
      this.scene.start('TitleScene');
    });

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('SpaceScene');
    });
  }
}
export default GameOverScene;