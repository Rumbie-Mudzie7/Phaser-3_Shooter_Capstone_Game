import Phaser from 'phaser';

import Credits from './CreditsScene'

class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene')
  }

  preload () {
    this.load.image('button1', '/assets/images/green_button01.png');
    this.load.image('button2', '/assets/images/green_button02.png');
  }

  create () {
    this.gameButton = this.add.sprite(this.scale.width/2, this.scale.height/2 -150, 'button1').setInteractive();
         
    this.gameText = this.add.text(this.scale.width/2, this.scale.height/2 -150, 'Play', { fontSize: '32px', fill: '#57154a' }).setOrigin(0.5, 0.5);
         
    this.gameButton.on('pointerdown', function (pointer) {
      this.scene.start('LoadingScene');
    }.bind(this));
      
    this.input.on('pointerover', function (event, gameObjects) {
      gameObjects[0].setTexture('button2');
    });
      
    this.input.on('pointerout', function (event, gameObjects) {
      gameObjects[0].setTexture('button1');
    });


    //OPTIONS
    this.optionsButton = this.add.sprite(this.scale.width/2, this.scale.height/2 -40, 'button1').setInteractive();
// this.centerButton(this.optionsButton);
 
    this.optionsText = this.add.text(this.scale.width/2, this.scale.height/2 -40, 'Options', { fontSize: '32px', fill: '#57154a' }).setOrigin(0.5, 0.5);
// this.centerButtonText(this.optionsText, this.optionsButton);
 
    this.optionsButton.on('pointerdown', function (pointer) {
      this.scene.start('Options');
    }.bind(this));

    // CREDITS
    this.creditsButton = this.add.sprite(this.scale.width/2, this.scale.height/2 +70, 'button1').setInteractive();
    // this.centerButton(this.creditsButton, -1);
   
    this.creditsText = this.add.text(this.scale.width/2, this.scale.height/2 +70, 'Credits', { fontSize: '32px', fill: '#57154a' }).setOrigin(0.5, 0.5);
    // this.centerButtonText(this.creditsText, this.creditsButton);
   
    this.creditsButton.on('pointerdown', function (pointer) {
      // console.log(pointer)
      this.scene.start('CreditsScene');
    }.bind(this));
   
    this.input.on('pointerover', function (event, gameObjects) {
      gameObjects[0].setTexture('button2');
    });
   
    this.input.on('pointerout', function (event, gameObjects) {
      gameObjects[0].setTexture('button1');
    });

  }

}

export default TitleScene;