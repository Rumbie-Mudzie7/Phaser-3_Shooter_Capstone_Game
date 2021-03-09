import Phaser from 'phaser';

class CreditsScene extends Phaser.Scene {
  constructor () {
    super('CreditsScene')
  }

  preload(){}

  create () {

    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Created By: Placeholder', { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(this.scale.width/2, this.scale.height/2, this.scale.width, this.scale.height);
     
    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone
    );
     
    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone
    );
     
    this.madeByText.setY(1000);
  }

}

export default CreditsScene;