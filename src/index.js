import Phaser from 'phaser';
import SpaceScene from './scenes/SpaceScene';
import { UserInputScene } from './scenes/UserInputScene';
import LoadingScene from './scenes/LoadingScene';
import GameOverScene from './scenes/GameOverScene';
import TitleScene from './scenes/TitleScene';
import CreditsScene from './scenes/CreditsScene';
import LeaderBoardScene from './scenes/LeaderBoardScene';
import OptionsScene from './scenes/OptionsScene';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 800,
  height: 600,
  dom: {
    createContainer: true,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 0 },
      enableBody: true,
    },
  },
  scene: [
    TitleScene,
    LoadingScene,
    UserInputScene,
    SpaceScene,
    GameOverScene,
    CreditsScene,
    LeaderBoardScene,
    OptionsScene],
};
const game = new Phaser.Game(config);