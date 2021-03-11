import Phaser from 'phaser';

import Credits from './CreditsScene';
import OptionsScene from './OptionsScene';

class TitleScene extends Phaser.Scene {
  constructor() {
    super('TitleScene')
  }

  preload () {
    this.load.image('button1', '/assets/images/green_button01.png');
    this.load.image('button2', '/assets/images/green_button02.png');
  }

  create () {
    this.gameButton = this.add.sprite(this.scale.width/2, this.scale.height/2 -170, 'button1').setInteractive();
         
    this.gameText = this.add.text(this.scale.width/2, this.scale.height/2 -170, 'Play', { fontSize: '32px', fill: '#57154a' }).setOrigin(0.5, 0.5);
         
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
    this.optionsButton = this.add.sprite(this.scale.width/2, this.scale.height/2 -60, 'button1').setInteractive();
// this.centerButton(this.optionsButton);
 
    this.optionsText = this.add.text(this.scale.width/2, this.scale.height/2 -60, 'Options', { fontSize: '32px', fill: '#57154a' }).setOrigin(0.5, 0.5);
// this.centerButtonText(this.optionsText, this.optionsButton);
 
    this.optionsButton.on('pointerup', function (pointer) {
      this.scene.start('OptionsScene');
    }.bind(this));

    // CREDITS
    this.creditsButton = this.add.sprite(this.scale.width/2, this.scale.height/2 +50, 'button1').setInteractive();
      
    this.creditsText = this.add.text(this.scale.width/2, this.scale.height/2 +50, 'Credits', { fontSize: '32px', fill: '#57154a' }).setOrigin(0.5, 0.5);
   
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


      // LEADERBOARD
      this.leadersButton = this.add.sprite(this.scale.width/2, this.scale.height/2 +160, 'button1').setInteractive();
      
      this.leadersText = this.add.text(this.scale.width/2, this.scale.height/2 +160, 'Leaders', { fontSize: '32px', fill: '#57154a' }).setOrigin(0.5, 0.5);
     
      this.leadersButton.on('pointerdown', function (pointer) {
        // console.log(pointer)
        this.scene.start('LeaderBoardScene');
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