import LoadingScene from '../scenes/LoadingScene';

const loadingScene = new LoadingScene();

test('loadingScene is of type an object', () => {
  expect(typeof loadingScene).toBe('object');
});