import LeaderBoardScene from '../scenes/LeaderBoardScene';

const leaderBoardScene = new LeaderBoardScene();
test('gameOverScene is typeof object', () => {
    expect(typeof leaderBoardScene).toBe('object');
})