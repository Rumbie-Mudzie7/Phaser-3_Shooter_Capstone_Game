import Phaser from 'phaser';
import { gameScore } from './UserInputScene';
import { putScore } from '../api/request';

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
class SpaceScene extends Phaser.Scene {
  constructor() {
    super('SpaceScene');
    this.ship;
    this.laserGroup;
    this.inputKeys;
    this.cursors;
    this.laserSound;
  }

  preload() {
    this.load.image('laser', '/assets/images/bulet_3.png');
    this.load.image('space-bg', '/assets/images/space-1.png');
    this.load.image('ship', '/assets/images/Spaceship_tut.png');
    this.load.image('enemy1', '/assets/images/Bat2.png');
    this.load.image('enemy2', '/assets/images/enemy_game_spider.png');
    this.load.audio('laserfire', '/assets/sounds/laserfire.ogg');
  }

  create() {
    this.form = document.querySelector('#input-form');
    this.form.style.display = 'none';
    this.laserSound = this.sound.add('laserfire', { loop: false });
    this.add.image(0, 0, 'space-bg').setOrigin(0, 0);
    this.laserGroup = new LaserGroup(this);
    this.addShip();
    this.addEvents();
    this.cursors = this.input.keyboard.createCursorKeys();
    this.scoreText = this.add.text(20, 50, `Score: ${gameScore.score}`, {
      fill: '#fff',
      fontSize: 30,
    });
    // this.gameOverText = this.add.text(50, 100, 'Game Over', {
    //   fontSize: '15px', fill: '#fff'
    // })
    const enemies = this.physics.add.group();
    const enemiesList = ['enemy1', 'enemy2'];
    function enemyGenerator() {
      const xCoordinate = Math.random() * 800;
      const randomEnemy = enemiesList[Math.floor(Math.random() * 2)];
      enemies
        .create(xCoordinate, 10, randomEnemy)
        .setScale(0.2)
        .setVelocityY(50);
    }
    const enemyObject = {
      callback: enemyGenerator,
      delay: 600,
      callbackScope: this,
      loop: true,
    };
    this.enemyGeneratorLoop = this.time.addEvent(enemyObject);
    // enemy collides with laser
    this.physics.add.collider(enemies, this.laserGroup, (enemy, laser) => {
      gameScore.score += 10;
      enemy.destroy();
      laser.destroy();
      this.scoreText.setText(`Score: ${gameScore.score}`);
    });
    // enemy collides with ship
    this.physics.add.collider(this.ship, enemies, () => {
      putScore(gameScore.playerName, gameScore.score);
      this.enemyGeneratorLoop.destroy();
      this.physics.pause();
      this.scene.stop('SpaceScene');
      this.scene.start('GameOverScene');
      // this.input.on('pointerup', () => {
      //   gameState.score = 0;
      //   this.scene.restart();
    });
  }

  addShip() {
    const centerX = this.cameras.main.width / 2;
    const bottom = this.cameras.main.height - 90;
    this.ship = this.add.image(centerX, bottom, 'ship').setScale(0.5);
    this.physics.add.existing(this.ship);
    this.ship.body.setCollideWorldBounds();
  }

  addEvents() {
    this.input.on('pointermove', pointer => {
      this.ship.x = pointer.x;
    });
    this.input.on('pointerdown', () => {
      this.launchLaser();
    });
    this.input.keyboard.on('keydown', event => {
      if (event.code === 'Space') {
        this.launchLaser();
      }
    });
  }

  launchLaser() {
    this.laserGroup.triggerLaser(this.ship.x, this.ship.y - 20);
    this.laserSound.play();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.ship.x -= 8;
    } else if (this.cursors.right.isDown) {
      this.ship.x += 8;
    }
  }
}
export default SpaceScene;