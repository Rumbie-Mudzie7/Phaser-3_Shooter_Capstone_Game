import 'babel-polyfill';
import { getScores, putScores } from '../api/request';
require('jest-fetch-mock').enableMocks();
const regeneratorRuntime = require('regenerator-runtime');
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
      expect(result).toEqual(response.result);
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
      const response = await putScores(player.user, player.score);
      expect(response.result).toEqual('Leaderboard score updated successfully');
    };
  });
});