import 'regenerator-runtime';

const createGame = async () => {
  const name = JSON.stringify({ name: 'Rue Shooter Game' });
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: name,
  };
  const key = await fetch(url, data);
  const keyData = await key.json();
  return keyData;
};

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FGgskDeAMACt8Rl9zVc0/scores/';
const putScore = async (user, score) => {
  const body = JSON.stringify({ user, score });
  const data = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  };
  const response = await fetch(url, data);
  const result = await response.json();
  return result;
};

const getScores = async () => {
  const data = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  const response = await fetch(url, data);
  const scores = await response.json();
  return scores.result;
};

export { putScore, getScores, createGame };





export default class Request {
  constructor() {
  
    let gameId = FGgskDeAMACt8Rl9zVc0;
    this.baseURI = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
  }

  async createGame() {
    const gameName = { name: 'Rue Shooter Game' };
    const response = await fetch(this.baseURI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(gameName),
    });

    if (response.status !== 201) {
      return new Error('Unable to create a Game Object');
    }

    const gameId = await response.json();
    return gameId;
  }

  async saveScore(user, score) {
    const gameScoresURI = `${this.baseURI}:${this.gameId}/scores`;
    const playerScore = {
      user,
      score,
    };


    const response = await fetch(gameScoresURI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(playerScore),
    });

    if (response.status !== 201) {
      return new Error('Unable to save player score');
    }

    const data = await response.json();
    return data;
  }

  async getAllUsers() {
    const gameScoresURI = `${this.baseURI}:${this.gameId}/scores`;

    const response = await fetch(gameScoresURI);

    if (response.status !== 200) {
      return new Error('Unable to save player score');
    }

    const data = await response.json();
    return data;
  }
}