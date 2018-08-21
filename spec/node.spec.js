const { getJson, postJson } = require('./util');

const endpoint = 'https://localhost:12345';

describe('node GET API example', () => {
  it('should compare response body and status code', async () => {
    const expected = {
      address: 'GB73FN4YLGQQ3ISDCLZGJDPZKUYF3KZGAPBIWDDEMTJXQDNP7WZ5J3RL',
      alias: 'GB73.7WZ5',
      state: 'NONE',
      validators: {
        GACYJM6DQVNLYI53IUIOC7MEKFUT2DFMFVWL4R6IPDNRG3ZKICIAFUHO: {
          address: 'GACYJM6DQVNLYI53IUIOC7MEKFUT2DFMFVWL4R6IPDNRG3ZKICIAFUHO',
          alias: 'GACY.ICIA',
          endpoint: 'https://localhost:12346',
          state: 'NONE',
        },
        GDAXGCPCWAGWJZXUIWKAYZUMCRPLGX3XSCQY7CE6HNGOA34EGJFJU6PK: {
          address: 'GDAXGCPCWAGWJZXUIWKAYZUMCRPLGX3XSCQY7CE6HNGOA34EGJFJU6PK',
          alias: 'GDAX.GJFJ',
          endpoint: 'https://localhost:12347',
          state: 'NONE',
        },
      },
    };

    await getJson(`${endpoint}/node/`, expected, 200);
  });

  it('should check only 200 OK', async () => {
    await getJson(`${endpoint}/node/`);
  });

  it('should check only status code', async () => {
    await getJson(`${endpoint}/api/`, 404);
  });
});

describe('node POST API example', () => {
  const body = { test: 1 };

  it('should compare response body and status code', async () => {
    await postJson(`${endpoint}/node/message`, body, body, 200);
  });

  it('should check only 200 OK', async () => {
    await postJson(`${endpoint}/node/message`, body);
  });

  it('should check only status code', async () => {
    await postJson(`${endpoint}/api`, body, 404);
  });
});
