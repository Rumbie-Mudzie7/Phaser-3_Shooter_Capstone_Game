import Phaser from 'phaser';

class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('PreloaderScene')
  }

  preload () {
    this.load.image('box', '/assets/images/grey_box.png');
    this.load.image('checkedBox', '/assets/images/green_boxCheckmark.png')
    this.load.audio('bgMusic', ['/assets/sounds/bgMusic.mp3'])
  }
}

export default PreloaderScene;