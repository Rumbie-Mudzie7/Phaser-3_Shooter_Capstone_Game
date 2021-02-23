import Phaser from 'phaser';

class SpaceScene extends Phaser.Scene {
  constructor() {
    super();
    this.ship;

  }

  preload() {
    this.load.image('laser', '/assets/imagesbulet_3.png');
    this.load.image('space-bg', '/assets/images/space-1.png');

    this.load.image('ship', '/assets/images/Spaceship_tut.png');
  }

  create() {
    let spaceBackground = this.add.image(0, 0, 'space-bg');
    // this.cameras.main.setBackgroundColor(0x1D1923);

    this.addShip();
    this.addEvents();
  }

  addShip() {
    const centerX = this.cameras.main.width / 2;
    const bottom = this.cameras.main.height - 90;
    this.ship = this.add.image(centerX, bottom, 'ship')
  }

  addEvents() {
    this.input.on('pointermove', (pointer) => {
      this.ship.x = pointer.x;
    });
}


  update() {
  }

}


export default SpaceScene;