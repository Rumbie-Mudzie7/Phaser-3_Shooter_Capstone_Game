import TitleScene from '../scenes/TitleScene';

const titleScene = new TitleScene();
test('titleScene  is an object', () => {
  expect(typeof titleScene).toBe('object');
});

it('titleScene should have many properties', () => {
  expect(Object.keys(titleScene)).toHaveLength(1);
});
