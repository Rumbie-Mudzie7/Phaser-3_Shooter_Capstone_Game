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

  //Lifespan function to keep lasers firing
  preUpdate(time, delta) {
    super.preUpdate(time, delta);

    if (this.y <= 0) {
      this.setActive(false);
      this.setVisible(false);
    }
  }
}

class LaserGroup extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    // Call the super constructor, passing in a world and a scene
    super(scene.physics.world, scene);

    // Initialize the group
    this.createMultiple({
      classType: Laser,
      frameQuantity: 30, //maximum shots to be fired at an interval
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
    this.inputKeys;
    this.cursors;
  }

  preload() {
    this.load.image('laser', '/assets/images/bulet_3.png');
    this.load.image('space-bg', '/assets/images/space-1.png');
    this.load.image('ship', '/assets/images/Spaceship_tut.png');
    this.load.image('enemy1', '/assets/images/Bat2.png');
    this.load.image('enemy2', '/assets/images/enemy_game_spider.png');
  }

  create() {
    let spaceBackground = this.add.image(0, 0, 'space-bg').setOrigin(0, 0);
    this.laserGroup = new LaserGroup(this);
    this.addShip();
    this.addEvents();
    this.cursors = this.input.keyboard.createCursorKeys();
    const enemies = this.physics.add.group();
    const enemiesList = ['enemy1', 'enemy2'];
  
    function enemyGenerator() {
      const xCoordinate = Math.random() * 800;
      const randomEnemy = enemiesList[Math.floor(Math.random() * 2)];
      enemies.create(xCoordinate, 10, randomEnemy);
      enemies.children.iterate((child) => {
        child.setScale(0.2);
      });

    }

    const enemyObject = { callback: enemyGenerator, delay: 150, 
                        callbackScope: this, loop: true, };

    this.enemyGeneratorLoop = this.time.addEvent(enemyObject);
  }

  addShip() {
    const centerX = this.cameras.main.width / 2;
    const bottom = this.cameras.main.height - 90;
    this.ship = this.add.image(centerX, bottom, 'ship').setScale(0.5);
    this.physics.add.existing(this.ship);
    this.ship.body.setCollideWorldBounds();
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

    if (this.cursors.left.isDown) {
      this.ship.x -= 8;
    }
    else if (this.cursors.space.isDown) {
      this.launchLaser();
    }
    else if (this.cursors.right.isDown) {
      this.ship.x += 8;
    }
    // Loop over all keys
    // this.inputKeys.forEach(key => {

    //   if (Phaser.Input.Keyboard.JustDown(key)) {
    //     this.launchLaser();
    //   }

    // if (this.cursors.left.isDown)
    // {
    //     ship.setVelocityX(-160);

    //     ship.anims.play('left', true);
    // }
    // else if (cursors.right.isDown)
    // {
    //     ship.setVelocityX(160);

    //     ship.anims.play('right', true);
    // }
    // else
    // {
    //     ship.setVelocityX(0);

    //     ship.anims.play('turn');
    // }

    // if (cursors.up.isDown && ship.body.touching.down)
    // {
    //     ship.setVelocityY(-330);
    // }
    // });
  }


}


export { Laser, LaserGroup, SpaceScene };