import Phaser from 'phaser';

const gameScore = {
  score: 0,
  musicOn: true,
  soundOn: true 
};

class UserInputScene extends Phaser.Scene {
  constructor() {
    super('UserInputScene');
  }

  preload() {
    this.load.html('form', 'form.html');
  }

  create() {
    this.form = document.querySelector('#input-form');
    this.nameInput = document.querySelector('#name');
    this.form.style.display = 'block';
    this.add
      .text(360, 240, 'Please enter your name to get started', {
        fill: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
      })
      .setOrigin(0.5);
    this.returnKey = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ENTER,
    );
    this.returnKey.on('down', () => {
      if (this.nameInput.value) {
        gameScore.playerName = this.nameInput.value;
        this.form.style.display = 'none';
        this.scene.stop();
        this.scene.start('LoadingScene');
      }
    });
  }
}

export { UserInputScene, gameScore };