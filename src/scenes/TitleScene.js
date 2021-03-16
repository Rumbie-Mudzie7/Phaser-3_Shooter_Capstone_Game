import Phaser from 'phaser';
import { gameScore } from './UserInputScene';

class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene');
  }

  create() {
    if (gameScore.musicOn === true) {
      gameScore.backGroundMc.play();
    } else {
      gameScore.backGroundMc.stop();
    }

    this.gameButton = this.add.sprite(this.scale.width / 2, this.scale.height / 2 - 170, 'button1').setInteractive();

    this.gameText = this.add.text(this.scale.width / 2, this.scale.height / 2 - 170, 'Play', { fontSize: '32px', fill: '#57154a' }).setOrigin(0.5, 0.5);

    this.gameButton.on('pointerup', () => {
      this.scene.start('SpaceScene');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('button2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('button1');
    });


    // OPTIONS
    this.optionsButton = this.add.sprite(this.scale.width / 2, this.scale.height / 2 - 60, 'button1').setInteractive();

    this.optionsText = this.add.text(this.scale.width / 2, this.scale.height / 2 - 60, 'Options', { fontSize: '32px', fill: '#57154a' }).setOrigin(0.5, 0.5);

    this.optionsButton.on('pointerup', () => {
      this.scene.start('OptionsScene');
    });

    // CREDITS
    this.creditsButton = this.add.sprite(this.scale.width / 2, this.scale.height / 2 + 50, 'button1').setInteractive();

    this.creditsText = this.add.text(this.scale.width / 2, this.scale.height / 2 + 50, 'Credits', { fontSize: '32px', fill: '#57154a' }).setOrigin(0.5, 0.5);

    this.creditsButton.on('pointerdown', () => {
      // console.log(pointer)
      this.scene.start('CreditsScene');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('button2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('button1');
    });


    // LEADERBOARD
    this.leadersButton = this.add.sprite(this.scale.width / 2, this.scale.height / 2 + 160, 'button1').setInteractive();

    this.leadersText = this.add.text(this.scale.width / 2, this.scale.height / 2 + 160, 'Leaders', { fontSize: '32px', fill: '#57154a' }).setOrigin(0.5, 0.5);

    this.leadersButton.on('pointerdown', () => {
      this.scene.start('LeaderBoardScene');
    });

    this.input.on('pointerover', (event, gameObjects) => {
      gameObjects[0].setTexture('button2');
    });

    this.input.on('pointerout', (event, gameObjects) => {
      gameObjects[0].setTexture('button1');
    });
  }
}

export default TitleScene;