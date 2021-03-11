import Phaser from 'phaser';

class OptionsScene extends Phaser.Scene {
  constructor () {
    super('OptionsScene');
  }

  preload () {
    this.load.image('box', '/assets/images/grey_box.png');
    this.load.image('checkedBox', '/assets/images/green_boxCheckmark.png')
    this.load.audio('bgMusic', ['/assets/sounds/bgMusic.mp3'])
  }

  create () {
    this.musicOn = true;
    this.soundOn = true;
    
    this.text = this.add.text(300, 100, 'Options', { fontSize: '40px' });
    this.musicButton = this.add.image(200, 200, 'checkedBox');
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 });
    
    this.soundButton = this.add.image(200, 300, 'checkedBox');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });
    
    this.musicButton.setInteractive();
    this.soundButton.setInteractive();
    
    this.musicButton.on('pointerdown', function () {
      this.musicOn = !this.musicOn;
      this.updateAudio();
    }.bind(this));
    
    this.soundButton.on('pointerdown', function () {
      this.soundOn = !this.soundOn;
      this.updateAudio();
    }.bind(this));
    
    this.updateAudio()


    this.menuButton = this.add.sprite(this.scale.width/2, this.scale.height/2 +150, 'button1').setInteractive();
    this.menuText = this.add.text(0, 0, 'Menu', { fontSize: '32px', fill: '##57154a' });
    Phaser.Display.Align.In.Center(this.menuText, this.menuButton);
    
    this.menuButton.on('pointerdown', function (pointer) {
      this.scene.start('TitleScene');
    }.bind(this));

  }

  updateAudio() {
    if (this.musicOn === false) {
      this.musicButton.setTexture('box');
    } else {
      this.musicButton.setTexture('checkedBox');
    }
  
    if (this.soundOn === false) {
      this.soundButton.setTexture('box');
    } else {
      this.soundButton.setTexture('checkedBox');
    }
  }
}

export default OptionsScene;