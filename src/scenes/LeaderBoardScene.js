import Phaser from 'phaser';
import {getScores} from '../api/request';

// class LeaderBoardScene extends Phaser.Scene {
//   constructor () {
//     super('LeaderBoardScene')
//   }

//   async create() {
//    const players = await getScores();
//    const response = await JSON.parse(players);
//    const result = response.filter((player, player2) => player2.score - player.score).slice(0, 5);
//    this.input.on('pointerup', () => {
//      console.log(result);
//    })
//   }
// }

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
    this.add.text(500, position, 'SCORE').setTint(0x00ff00);
    const request = new Request();
    this.usersScore = await request.getScores();
    this.usersSortedScore = this.usersScore.result.sort((a, b) => (a.score > b.score ? -1 : 1));

    position += 25;
    this.usersSortedScore.forEach((result, index) => {
      if (index < 10) {
        this.add.text(300, position, `  ${index + 1} `).setTint(0xff0000);

        this.add.text(400, position, `${result.user}`).setTint(0xff0000);

        this.add.text(500, position, `${result.score}`).setTint(0xff0000);

        position += 25;
      }
    });

    this.add
      .text(
        this.scale.width * 0.5,
        this.scale.height * 0.8,
        'Press space to play again.',
      )
      .setOrigin();

    this.input.keyboard.once('keydown-SPACE', () => {
      this.scene.start('SpaceScene');
    });
  }
}

export default LeaderBoardScene;