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
}

class LaserGroup extends Phaser.Physics.Arcade.Group
{
	constructor(scene) {
		// Call the super constructor, passing in a world and a scene
		super(scene.physics.world, scene);
 
		// Initialize the group
		this.createMultiple({
			classType: Laser, // This is the class we create just below
			frameQuantity: 30, // Create 30 instances in the pool
			active: false,
			visible: false,
			key: 'laser'
		})
	}

    triggerLaser(x, y) {
      // Get the first available sprite in the group
      const laser = this.getFirstDead(false);
      if (laser) {
        laser.trigger(x, y);
      }
    }
 
}
 
class SpaceScene extends Phaser.Scene {
  constructor() {
    super();
    this.ship;
    this.laserGroup;
  }

  preload() {
    this.load.image('laser', '/assets/images/bulet_3.png');
    this.load.image('space-bg', '/assets/images/space-1.png');
    this.load.image('ship', '/assets/images/Spaceship_tut.png');
  }

  create() {
    let spaceBackground = this.add.image(0, 0, 'space-bg');
    // this.cameras.main.setBackgroundColor(0x1D1923);
    this.laserGroup = new LaserGroup(this);
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

    this.input.on('pointerdown', pointer => {
      this.launchLaser();
    });
  }


    launchLaser() {
      this.laserGroup.triggerLaser(this.ship.x, this.ship.y - 20);
    }

  update() {
  }

}


export { Laser, LaserGroup, SpaceScene};