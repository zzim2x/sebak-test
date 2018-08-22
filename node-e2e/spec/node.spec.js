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

    // test every nodes
    const promises = config.nodes.map((n) => n.getJson('/node/', expected, 200));
    await Promise.all(promises);
  });

  it('should check only 200 OK', async () => {
    const promises = config.nodes.map((n) => n.getJson('/node/'));
    await Promise.all(promises);
  });

  it('should check only status code', async () => {
    const promises = config.nodes.map((n) => n.getJson('/api/', 404));
    await Promise.all(promises);
  });
});

describe('node POST API example', () => {
  const body = { test: 1 };

  it('should compare response body and status code', async () => {
    const promises = config.nodes.map((n) => n.postJson('/node/message', body, body, 200));
    await Promise.all(promises);
  });

  it('should check only 200 OK', async () => {
    const promises = config.nodes.map((n) => n.postJson('/node/message', body));
    await Promise.all(promises);
  });

  it('should check only status code', async () => {
    const promises = config.nodes.map((n) => n.postJson('/api', body, 404));
    await Promise.all(promises);
  });
});
