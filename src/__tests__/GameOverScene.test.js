import GameOverScene from '../scenes/GameOverScene';

const gameOverScene = new GameOverScene();

test('gameOverScene is of type object', () => {
  expect(typeof gameOverScene).toBe('object');
});
