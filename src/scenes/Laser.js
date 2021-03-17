import Phaser from 'phaser';

class Laser extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y) {
    super(scene, x, y, 'laser');
  }

  trigger(x, y) {
    this.body.reset(x, y);
    this.setActive(true);
    this.setVisible(true);
    this.setVelocityY(-900);
  }

  // Lifespan function to keep lasers firing
  preUpdate(time, delta) {
    super.preUpdate(time, delta);
    if (this.y <= 0) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}

export default Laser;