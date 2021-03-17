/* eslint-disable no-unused-expressions */
import 'babel-polyfill';
import { putScore, getScores } from '../api/request';

require('jest-fetch-mock').enableMocks();

const response = {
  result: [
    {
      user: 'Clayton',
      score: 120,
    },
    {
      user: 'Tafadzwa',
      score: 590,
    },
    {
      user: 'Lioric',
      score: 340,
    },
  ],
};

describe('Getscores ', () => {
  it('Returns an array of objects', () => {
    fetch.mockResponse(response);
    async () => {
      const result = await getScores();
      return expect(result).toEqual(response.result);
    };
  });
});

describe('putScore', () => {
  it('Sends user data to the server', () => {
    fetch.mockResponse();
    async () => {
      const player = {
        user: 'Lynette',
        score: 890,
      };
      const response = await putScore(player.user, player.score);
      return expect(response.result).toEqual('Leaderboard score updated successfully');
    };
  });
});
