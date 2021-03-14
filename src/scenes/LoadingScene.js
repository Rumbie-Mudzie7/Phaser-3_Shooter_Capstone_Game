import Phaser from 'phaser';

class LoadingScene extends Phaser.Scene {
  constructor() {
    super('LoadingScene');
  }

  preload() {
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);
    this.load.image('logo', '/assets/images/galaxy4.png');
    for (let i = 0; i < 100; i += 1) {
      this.load.image(`logo${i}`, '/assets/images/galaxy4.png');
    }
    this.load.on('progress', (value) => {
      percentText.setText(`${parseInt(value * 100)}%`);
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });
    this.load.on('fileprogress', (file) => {
    });
    this.load.on('complete', () => {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
    });
    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#ffffff',
      },
    });
    percentText.setOrigin(0.5, 0.5);
    const { width } = this.cameras.main;
    const { height } = this.cameras.main;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
        font: '20px monospace',
        fill: '#ffffff',
      },
    });
    loadingText.setOrigin(0.5, 0.5);
  }

  create() {
    const { width } = this.scale;
    const { height } = this.scale;
    this.add.text(width / 2, height / 2 - 200, 'Click Anywhere to Start Game', {
      font: '20px monospace',
      fill: '#ffffff',
    }).setOrigin(0.5, 0.5);
    const logo = this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo').setScale(0.5);
    this.input.on('pointerdown', () => this.scene.start('UserInputScene'));
  }
}
export default LoadingScene;