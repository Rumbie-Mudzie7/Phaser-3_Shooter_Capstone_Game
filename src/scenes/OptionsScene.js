import Phaser from 'phaser';
import { gameScore } from './UserInputScene';

class OptionsScene extends Phaser.Scene {
  constructor() {
    super('OptionsScene');
  }

  create() {
    this.text = this.add.text(300, 100, 'Options', { fontSize: '40px' });
    this.musicButton = this.add.image(200, 200, 'box');
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 });
    this.soundButton = this.add.image(200, 300, 'checkedBox');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });
    this.musicButton.setInteractive();
    this.soundButton.setInteractive();
    this.musicButton.on('pointerup', () => {
      this.updateMusic();
    });
    this.soundButton.on('pointerdown', () => {
      this.updateSound();
    });
    this.menuButton = this.add
      .sprite(this.scale.width / 2, this.scale.height / 2 + 150, 'button1')
      .setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', {
      fontSize: '32px',
      fill: '##57154a',
    });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    this.menuButton.on('pointerdown', () => {
      this.scene.start('TitleScene');
    });
  }

  updateSound() {
    if (!gameScore.soundOn) {
      this.soundButton.setTexture('box');
      gameScore.soundOn = true;
    } else {
      this.soundButton.setTexture('checkedBox');
      gameScore.soundOn = false;
    }
  }

  updateMusic() {
    if (!gameScore.musicOn) {
      this.musicButton.setTexture('checkedBox');
      gameScore.backGroundMc.play();
      gameScore.musicOn = true;
    } else {
      this.musicButton.setTexture('box');
      gameScore.backGroundMc.stop();
      gameScore.musicOn = false;
    }
  }
}
export default OptionsScene;