import Phaser from 'phaser';
import { getScores } from '../api/request';

class LeaderBoardScene extends Phaser.Scene {
  constructor() {
    super('LeaderBoardScene');
  }

  async create() {
    this.add
      .text(this.scale.width * 0.5, this.scale.height * 0.1, 'Leaderboard', {
        fontSize: 48,
        color: '#00f',
      })
      .setOrigin();

    let position = 130;
    this.add.text(300, position, 'RANK').setTint(0x00ff00);
    this.add.text(400, position, 'NAME').setTint(0x00ff00);
    this.add.text(600, position, 'SCORE').setTint(0x00ff00);

    this.playerScore = getScores();
    this.playerScore
      .then((response) => {
        this.playerScore = response;
        this.playerSortedScore = this.playerScore.sort((a, b) => (a.score > b.score ? -1 : 1));
        position += 25;
        this.playerSortedScore.forEach((result, index) => {
          if (index < 10) {
            this.add.text(300, position, `  ${index + 1} `).setTint(0xff0000);

            this.add.text(400, position, `${result.user}`).setTint(0xff0000);

            this.add.text(600, position, `${result.score}`).setTint(0xff0000);

            position += 25;
          }
        });
      });

    this.add
      .text(
        this.scale.width * 0.5,
        this.scale.height * 0.8,
        'Press space to go back to the Menu.',
      )
      .setOrigin();

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('TitleScene');
    });
  }
}

export default LeaderBoardScene;