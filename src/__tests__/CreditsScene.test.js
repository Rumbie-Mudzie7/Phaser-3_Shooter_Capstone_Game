import CreditsScene from '../scenes/CreditsScene';

const creditsScene = new CreditsScene();

test('creditsScene is of type an object', () => {
  expect(typeof creditsScene).toBe('object');
});
