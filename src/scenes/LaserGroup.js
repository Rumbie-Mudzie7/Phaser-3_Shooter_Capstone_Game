import Phaser from 'phaser';
import Laser from './Laser';

class LaserGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    // Call the super constructor, passing in a world and a scene
    super(scene.physics.world, scene, { key: 'LaserGroup' });
  }

  triggerLaser(x, y) {
    // Get the first available sprite in the group
    this.createMultiple({
      classType: Laser,
      frameQuantity: 0, // maximum shots to be fired at an interval
      active: false,
      visible: false,
      key: 'laser',
    });
    const laser = this.getFirstDead(true, x, y);
    if (laser) {
      laser.trigger(x, y);
    }
  }
}

export default LaserGroup;